import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

function* bookingAsync(action) {}
function* getGameAndBookingAsync() {}
function* postTodayTime(action) {}

export function* watchBooking() {
  yield takeEvery("BOOKINGS", bookingAsync);
}
export function* watchUpdateGame() {
  yield takeEvery("GAME_BOOKING", getGameAndBookingAsync);
}
export function* watchPostTodayTime() {
  yield takeEvery("TODAY_DATE", postTodayTime);
}
