(function () {
  'use strict';

  const API_URL = 'https://hoctap-ai-grading.onrender.com/api/grade';
  const REQUEST_TIMEOUT_MS = 35000;

  async function gradeEssay(payload) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const error = new Error(data.error || `Dịch vụ chấm bài trả về lỗi ${response.status}.`);
        error.status = response.status;
        throw error;
      }
      return data;
    } catch (error) {
      if (error.name === 'AbortError') throw new Error('AI phản hồi quá lâu. Bạn hãy thử chấm lại.');
      if (error instanceof TypeError) throw new Error('Không kết nối được dịch vụ chấm AI. Vui lòng thử lại sau.');
      throw error;
    } finally {
      clearTimeout(timeout);
    }
  }

  window.AIGrading = Object.freeze({ gradeEssay });
})();
