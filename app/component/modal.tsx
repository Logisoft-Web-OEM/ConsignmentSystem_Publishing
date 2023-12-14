export default function Modal({ setModalOpen }: any) {
  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
    <div className="w-full h-full bg-#00000080 fixed top-0 left-0">
      <div className="w-100 h-70 p-5 bg-white absolute top-50% left-50% -translate-x-2/4 -translate-y-2/4 rounded-lg">
        <div className="flex justify-between items-center">
          <p>모달창입니다.</p>

          <button onClick={closeModal}>
            close
          </button>
        </div>
      </div>
    </div>
  )
}