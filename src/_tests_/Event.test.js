/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";

describe("<Event /> component", () => {
  let EventComponent;
  const event = {};
  beforeEach(() => {
    EventComponent = render(<Event event={event[0]} />);
  });
  test("renders event location", () => {
    expect(EventComponent.queryByText(event[0].location)).toBeInTheDocument();
  });
  test("renders event name", () => {
    expect(EventComponent.queryByText(event[0].summary)).toBeInTheDocument();
  });
  test("renders event time/date", () => {
    expect(EventComponent.queryByText(event[0].created)).toBeInTheDocument();
  });
  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });
  test("by default, event's details section should be hidden", () => {
    const eventDetails = EventComponent.queryByText("details");
    expect(eventDetails).not.toBeInTheDocument();
  });
  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const user = getEvents.setup();
    const showDetailsButton = EventComponent.queryByRole("button");
    await user.click(showDetailsButton);
    const eventDetails = EventComponent.description("details");
    expect(eventDetails).toBeInTheDocument();
    expect(eventDetails).toHaveClass("details");
  });
  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const user = getEvents.setup();
    const hideDetailsButton = EventComponent.queryByRole("button");
    await user.click(hideDetailsButton);
    const eventDetails = EventComponent.description("details");
    expect(eventDetails).not.toBeInTheDocument();
  });
});
