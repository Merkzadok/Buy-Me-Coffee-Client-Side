export const LoaderCoffee = () =>{
     return (
      <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50">
        <img
          src="/loadingGif.gif"
          alt="loadingGif"
          className="w-[150px] h-[150px] "
        />
        <p className="tracking-widest text-gray-500 mt-4">Loading...</p>
      </div>
    );
}