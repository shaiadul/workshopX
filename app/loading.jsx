export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="modelViewPort">
        <div className="eva">
          <div className="head">
            <div className="eyeChamber">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
          </div>
          <div className="body-box">
            <div className="hand"></div>
            <div className="hand"></div>
            <div className="scannerThing"></div>
            <div className="scannerOrigin"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
