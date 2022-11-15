import { shallow } from "enzyme";
import React from "react";
import { useState } from "react";

// Import components
import UploadedImagesContainer from "./UploadedImagesContainer";

describe("Uploaded images container", () => {
  let file = [{ name: "image", uploadDate: "2020-10-10", type: "image/png" }];
  const setFile = (recFile) => (file = recFile);
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <UploadedImagesContainer files={file} setFiles={setFile} />
    );
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
