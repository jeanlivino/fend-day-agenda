import { renderHook, act } from "@testing-library/react";
import { useSavedTalks } from "./useSavedTalks";

describe("useSavedTalks", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should retrieve saved talks from local storage", () => {
    localStorage.setItem("savedTalks", JSON.stringify([1, 2, 3]));
    const { result } = renderHook(() => useSavedTalks());
    expect(result.current.savedCardIds).toEqual([1, 2, 3]);
  });

  it("should save a new talk when toggleSaveCard is called", () => {
    const { result } = renderHook(() => useSavedTalks());
    act(() => { result.current.toggleSaveCard(1) });
    expect(result.current.savedCardIds).toEqual([1]);
    expect(JSON.parse(localStorage.getItem("savedTalks")!)).toEqual([1]);
  });

  it("should remove a saved talk when toggleSaveCard is called", () => {
    localStorage.setItem("savedTalks", JSON.stringify([1]));
    const { result } = renderHook(() => useSavedTalks());
    act(() => { result.current.toggleSaveCard(1) });
    expect(result.current.savedCardIds).toEqual([]);
    expect(JSON.parse(localStorage.getItem("savedTalks")!)).toEqual([]);
  });
});
