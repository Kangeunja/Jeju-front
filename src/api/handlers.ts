import { rest } from "msw";
import db from "../db.json";

export const handlers = [
  // rest.get("/api/spots", (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(db.spots));
  // }),

  // 메인 슬라이드 데이터
  rest.get("/api/spots", (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(db.spots));
    } catch (error) {
      console.log(error);
      return res(ctx.status(500), ctx.json({ message: "Handler error" }));
    }
  }),

  // 계절별 축제데이터
  rest.get("/api/festivals/:month", (req, res, ctx) => {
    try {
      const { month } = req.params;

      // db에서 해당 월 데이터만 필터링
      const data = db.festivals.filter((f) => f.month === month);

      return res(ctx.status(200), ctx.json(data));
    } catch (error) {
      console.log(error);
      return res(ctx.status(500), ctx.json({ message: "Handler error" }));
    }
  }),

  rest.get("/api/safeHouse", (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(db.safeHouseData));
    } catch (error) {
      console.log(error);
      return res(ctx.status(500), ctx.json({ message: "Handler error" }));
    }
  }),

  rest.get("/api/history/clothing", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.clothing));
  }),

  rest.get("/api/history/food", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.food));
  }),

  rest.get("/api/history/house", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.house));
  }),

  // // 상세페이지
  // rest.get("/api/spots/:id", (req, res, ctx) => {
  //   const spot = db.spots.find((s) => s.id === parseInt(req.params.id));
  //   return spot ? res(ctx.status(200), ctx.json(spot)) : res(ctx.status(404));
  // }),
];
