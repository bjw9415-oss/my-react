import ContinueButton from './complete/ContinueButton';
import OrderProduct from './complete/OrderProduct';

export default function OrderComplete() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="text-center">
          <p className="text-6xl">✅</p>
          <h2 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">
            주문이 완료되었습니다!
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">주문해주셔서 감사합니다.</p>
        </div>
        <div className="rounded-lg border bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white">주문 정보</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">주문번호</span>
              <span className="font-mono font-semibold">1769413256332-qwrm94jo2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">주문일시</span>
              <span className="font-semibold">2026년 1월 26일 오후 04:40</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">받는 분</span>
              <span className="font-semibold">ㅁ</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">전화번호</span>
              <span className="font-semibold">01011111111</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">배송주소</span>
              <span className="text-right font-semibold">qq</span>
            </div>
          </div>
        </div>
        <OrderProduct />
        <ContinueButton />
      </div>
    </main>
  );
}
