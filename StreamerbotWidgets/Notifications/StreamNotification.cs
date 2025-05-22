using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Streamer.bot.Plugin.Interface;

namespace StreamerbotWidgets;

public static class StreamNotification
{
    
    private static DefaultContractResolver _contractResolver = new DefaultContractResolver()
    {
        NamingStrategy = new CamelCaseNamingStrategy()
    };

    private static JsonSerializerSettings _settings = new JsonSerializerSettings()
    {
        ContractResolver = _contractResolver
    };

    
    public static void StreamerbotWidgetsSendNotification(this IInlineInvokeProxy CPH, Notification notification)
    {
        var json = JsonConvert.SerializeObject(WebSocketMessage.Create("Chat", notification), _settings);
        CPH.WebsocketBroadcastJson(json);
    }
}