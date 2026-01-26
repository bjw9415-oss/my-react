import React from 'react';

import { usePageContext } from './contexts/PageProvider';

export default function Order() {
  const { setPage } = usePageContext();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <form className="space-y-6" noValidate>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">배송 정보 입력</h2>
          <div>
            <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="홍길동"
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              type="text"
              value=""
              name="name"
            />
          </div>
          <div>
            <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
              전화번호 <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="010-1234-5678"
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              type="tel"
              value=""
              name="phone"
            />
          </div>
          <div>
            <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
              배송 주소 <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="서울시 강남구 테헤란로 123"
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              type="text"
              value=""
              name="address"
            />
          </div>
          <div>
            <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
              배송 메시지 (선택)
            </label>
            <textarea
              name="message"
              placeholder="배송 시 요청사항을 입력해주세요"
              rows={3}
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>
          <div className="flex gap-3">
            <button
              className="flex-1 rounded-lg border-2 border-blue-500 px-4 py-2 font-semibold text-blue-500 transition-all hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-blue-900"
              type="button"
              onClick={() => setPage('cart')}
            >
              취소
            </button>
            <button
              className="flex-1 rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
              type="submit"
              onClick={() => setPage('complete')}
            >
              주문 완료
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
