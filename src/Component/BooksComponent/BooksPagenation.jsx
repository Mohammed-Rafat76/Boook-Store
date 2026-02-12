export default function BooksPagenation() {
  return (
    <div>
      <div className="join flex gap-2">
        <input
          className="join-item rounded-lg border-0 btn btn-square bg-[#D9176C]"
          type="radio"
          name="options"
          aria-label="1"
          checked="checked"
        />
        <input
          className="join-item rounded-lg border-0 btn btn-square text-[#D9176c] bg-[#FFFFFF]"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item rounded-lg border-0 btn btn-square text-[#D9176c] bg-[#FFFFFF]"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item rounded-lg border-0 btn btn-square text-[#D9176c] bg-[#FFFFFF]"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>
    </div>
  );
}
