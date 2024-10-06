import React, { useState } from "react";
import { UploadThumbnail, Gallery } from "./components";
import { Separator } from "./components/ui/separator";

enum PageState {
  UPLOAD,
  GALLERY,
}

function App() {
  const [pageState, setPageState] = useState<PageState>(PageState.UPLOAD);

  return (
    <>
      <div className="flex flex-col sm:gap-24 gap-16 justify-center items-center py-6 px-3 h-screen">
        <div className="space-y-2">
          <h2 className="text-6xl text-center">📺 🤖</h2>
          <h2 className="text-5xl font-black tracking-light text-center">
            <span className="bg-gradient-to-r from-[#D4D4D4] to-[#E62117] bg-clip-text text-transparent">
              YouTube
            </span>{" "}
            Thumbnail Analyzer
          </h2>
          <p className="text-center">
            Upload your YouTube thumbnail and get instant feedback on it using
            our highly trained AI model.
          </p>
        </div>
        {pageState === PageState.UPLOAD && <UploadThumbnail />}
        {pageState === PageState.GALLERY && <Gallery />}
        <div className="w-4/5 lg:w-1/3">
          <Separator className=" bg-gray-800" />
          <p
            onClick={() =>
              pageState === PageState.UPLOAD
                ? setPageState(PageState.GALLERY)
                : setPageState(PageState.UPLOAD)
            }
            className="text-center m-4 text-gray-500 underline hover:cursor-pointer"
          >
            {pageState === PageState.UPLOAD &&
              "View previously uploaded thumbnails"}
            {pageState === PageState.GALLERY && "Rate a new thumbnail"}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
