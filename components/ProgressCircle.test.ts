import { ringDashOffset } from "./ProgressCircle";

jest.mock("react-native-reanimated", () => ({
  ...jest.requireActual("@/test-utils/reanimated").reanimatedModule,
  __esModule: true,
}));

describe("ringDashOffset", () => {
  const circumference = 100;

  test("leaves the given share of the ring drawn", () => {
    expect(ringDashOffset(circumference, 0)).toBe(100);
    expect(ringDashOffset(circumference, 25)).toBe(75);
    expect(ringDashOffset(circumference, 100)).toBe(0);
  });

  test("clamps progress outside 0 to 100", () => {
    expect(ringDashOffset(circumference, -5)).toBe(100);
    expect(ringDashOffset(circumference, 140)).toBe(0);
  });
});
