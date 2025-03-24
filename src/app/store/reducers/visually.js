import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  active: false,
  hide: false,
  fontSize: 2, 
  theme: "light", 
  picture: "image__show", 
  letterSpacing: "letter__normal",
  lineSpacing: "lineH__normal",
  font: "sans-serif",
  Embedded: true, 
  speech: false,
  loading: false, 
};

const visuallySlice = createSlice({
  name: "visually",
  initialState,
  reducers: {
    activeMode(state) {
      state.active = true;
      state.hide = true;
      state.picture = "image__show";
      state.theme = "light";
      state.fontSize = 2; 
      document.body.className = ""; 
      document.body.classList.add("light", "fontSize-2", "image__show", "letter__normal", "lineH__normal", "sans-serif");
    },
    deactivateMode(state) {
      Object.assign(state, initialState);
      document.body.className = ""; 
    },
    increaseFontSize(state) {
      if (state.active && state.fontSize < 26) {
        state.fontSize += 2;
        document.body.classList.remove(`fontSize-${state.fontSize - 2}`);
        document.body.classList.add(`fontSize-${state.fontSize}`);
      }
    },
    decreaseFontSize(state) {
      if (state.active && state.fontSize > 2) {
        state.fontSize -= 2;
        document.body.classList.remove(`fontSize-${state.fontSize + 2}`);
        document.body.classList.add(`fontSize-${state.fontSize}`);
      }
    },
    handleThemeChange(state, { payload }) {
      if (state.active) {
        state.theme = payload;
        document.body.classList.remove("light", "dark", "blue", "brown", "green");
        document.body.classList.add(payload);
      }
    },
    showPictures(state) {
      if (state.active) {
        state.picture = "image__show";
        document.body.classList.remove("image__hide", "image__dark");
        document.body.classList.add("image__show");
      }
    },
    hidePictures(state) {
      if (state.active) {
        state.picture = "image__hide";
        document.body.classList.remove("image__show", "image__dark");
        document.body.classList.add("image__hide");
      }
    },
    darkPictures(state) {
      if (state.active) {
        state.picture = "image__dark";
        document.body.classList.remove("image__show", "image__hide");
        document.body.classList.add("image__dark");
      }
    },
    activeSpeech(state) {
      if (state.active) state.speech = true;
    },
    unplugSpeech(state) {
      if (state.active) state.speech = false;
    },
    normalLetterSpacing(state) {
      if (state.active) {
        state.letterSpacing = "letter__normal";
        document.body.classList.remove("letter__average", "letter__big");
        document.body.classList.add("letter__normal");
      }
    },
    increaseLetterSpacing(state) {
      if (state.active) {
        state.letterSpacing = "letter__average";
        document.body.classList.remove("letter__normal", "letter__big");
        document.body.classList.add("letter__average");
      }
    },
    largeLetterSpacing(state) {
      if (state.active) {
        state.letterSpacing = "letter__big";
        document.body.classList.remove("letter__normal", "letter__average");
        document.body.classList.add("letter__big");
      }
    },
    normalLineSpacing(state) {
      if (state.active) {
        state.lineSpacing = "lineH__normal";
        document.body.classList.remove("lineH__average", "lineH__big");
        document.body.classList.add("lineH__normal");
      }
    },
    increaseLineSpacing(state) {
      if (state.active) {
        state.lineSpacing = "lineH__average";
        document.body.classList.remove("lineH__normal", "lineH__big");
        document.body.classList.add("lineH__average");
      }
    },
    largeLineSpacing(state) {
      if (state.active) {
        state.lineSpacing = "lineH__big";
        document.body.classList.remove("lineH__normal", "lineH__average");
        document.body.classList.add("lineH__big");
      }
    },
    switchToSerifFont(state) {
      if (state.active) {
        state.font = "serif";
        document.body.classList.remove("sans-serif");
        document.body.classList.add("serif");
      }
    },
    setDefaultFont(state) {
      if (state.active) {
        state.font = "sans-serif";
        document.body.classList.remove("serif");
        document.body.classList.add("sans-serif");
      }
    },
    setHide(state) {
      if (state.active) state.hide = false;
    },
    setShow(state) {
      if (state.active) state.hide = true;
    },
  },
});

export const {
  activeMode,
  deactivateMode,
  increaseFontSize,
  decreaseFontSize,
  handleThemeChange,
  showPictures,
  hidePictures,
  darkPictures,
  activeSpeech,
  unplugSpeech,
  largeLetterSpacing,
  increaseLetterSpacing,
  normalLetterSpacing,
  normalLineSpacing,
  largeLineSpacing,
  increaseLineSpacing,
  switchToSerifFont,
  setDefaultFont,
  setHide,
  setShow,
} = visuallySlice.actions;

export const useVisually = () => useSelector((state) => state.visually);
export default visuallySlice.reducer;