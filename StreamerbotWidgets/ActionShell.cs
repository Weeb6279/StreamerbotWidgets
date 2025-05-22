using StreamerbotWidgets;

public class CPHInline
#if OUTSIDE_STREAMERBOT
    : Streamer.bot.Plugin.Interface.CPHInlineBase
#endif
{

    public bool SendTestNotification()
    {
        CPH.TryGetArg("rawInput", out string rawInput);
        CPH.TryGetArg("userName", out string userName);
        var notification = new Notification(userName, rawInput);
        CPH.StreamerbotWidgetsSendNotification(notification);
        return true;
    }
}