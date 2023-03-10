import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducer/RootState";

export const useTypedSelector:TypedUseSelectorHook<ReturnType<typeof RootState>> = useSelector