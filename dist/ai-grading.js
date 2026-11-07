(function () {
  'use strict';

  const API_BASE = 'https://hoctap-ai-grading.onrender.com/api';
  const REQUEST_TIMEOUT_MS = 60000;

  async function request(path, payload) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const response = await fetch(`${API_BASE}/${path}`, {
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
      if (error.name === 'AbortError') throw new Error('AI phản hồi quá lâu. Bạn hãy thử nộp bài lại.');
      if (error instanceof TypeError) throw new Error('Không kết nối được dịch vụ chấm AI. Vui lòng thử lại sau.');
      throw error;
    } finally {
      clearTimeout(timeout);
    }
  }

  const gradeEssay = payload => request('grade', payload);
  const gradeEssays = payload => request('grade-batch', payload);
  const getHealth = async () => {
    const response = await fetch(`${API_BASE.replace(/\/api$/, '')}/health`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Dịch vụ chấm AI chưa sẵn sàng.');
    return response.json();
  };

  window.AIGrading = Object.freeze({ gradeEssay, gradeEssays, getHealth });
})();
