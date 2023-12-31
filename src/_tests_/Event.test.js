/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;

  let events;
  beforeAll(async () => {
    events = await getEvents();
  });

  beforeEach(() => {
    EventComponent = render(<Event event={events[0]} />);
  });
  test("renders event location", () => {
    expect(EventComponent.queryByText(events[0].location)).toBeInTheDocument();
  });
  test("renders event name", () => {
    expect(EventComponent.queryByText(events[0].summary)).toBeInTheDocument();
  });
  //   test("renders event time/date", () => {
  //     expect(EventComponent.queryByText(events[0].created)).toBeInTheDocument();
  //   });
  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    const eventDetails = EventComponent.queryByText("details");
    expect(eventDetails).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByRole("button");
    await user.click(showDetailsButton);
    const eventDetails = EventComponent.queryByText(events[0].description, {
      collapseWhitespace: false,
    });
    expect(eventDetails).toBeInTheDocument();
    expect(eventDetails).toHaveClass("details");
  });

  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const user = userEvent.setup();
    const hideDetailsButton = EventComponent.queryByRole("button");

    // this one is just to make the 'hide details' button appear
    await user.click(hideDetailsButton);

    // this is for clicking the 'hide details'
    await user.click(hideDetailsButton);
    const eventDetails = EventComponent.queryByText(events[0].description, {
      collapseWhitespace: false,
    });
    expect(eventDetails).not.toBeInTheDocument();
  });
});
