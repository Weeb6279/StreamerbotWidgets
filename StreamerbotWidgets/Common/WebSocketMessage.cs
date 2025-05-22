namespace StreamerbotWidgets;

public record WebSocketMessage<T>(string Channel, T Payload);

public static class WebSocketMessage
{
    public static WebSocketMessage<T> Create<T>(string channel, T payload) => new(channel, payload);
}