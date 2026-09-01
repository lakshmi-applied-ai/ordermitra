import { render, screen } from "@testing-library/react";
import { OrderMitraPanel } from "./ordermitra-panel";

// The panel calls the real useChat, which would try to stream from /api/chat.
// Mocking the hook keeps the test about the markup, not the network.
jest.mock("ai/react", () => ({
  useChat: jest.fn(),
}));

const { useChat } = jest.requireMock("ai/react");

test("renders the assistant message returned by useChat", () => {
  // Arrange: every field the component destructures, or it throws.
  useChat.mockReturnValue({
    messages: [
      {
        id: "1",
        role: "assistant",
        content: "Mr. Iyer has two open orders.",
      },
    ],
    input: "",
    handleInputChange: jest.fn(),
    handleSubmit: jest.fn(),
    status: "ready",
    stop: jest.fn(),
    reload: jest.fn(),
    error: undefined,
  });

  // Act
  render(<OrderMitraPanel />);

  // Assert
  expect(screen.getByText("Mr. Iyer has two open orders.")).toBeInTheDocument();
});
