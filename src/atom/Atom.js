import { atom, selector } from "recoil";

export const modeChange = atom({
    key: "Theme",
    default: 0,
});

export const setMode = selector({
    key: "ThemeChange",
    get: ({ get }) => get(modeChange),
    set: ({ set }) => set(modeChange),
});
