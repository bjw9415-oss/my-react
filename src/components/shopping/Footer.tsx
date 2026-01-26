import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-8 dark:border-gray-700 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold text-gray-800 dark:text-white">🛍️ Mini Shop</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              React 실습 프로젝트로 만든 미니 쇼핑몰입니다.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-bold text-gray-800 dark:text-white">링크</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-bold text-gray-800 dark:text-white">고객센터</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>📞 1234-5678</li>
              <li>📧 support@minishop.com</li>
              <li>🕐 평일 09:00 - 18:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
          © 2024 Mini Shop. All rights reserved. Made with React ⚛️
        </div>
      </div>
    </footer>
  );
}
