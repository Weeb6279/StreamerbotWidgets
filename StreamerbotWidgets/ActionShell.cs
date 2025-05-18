using StreamerbotWidgets;

public class CPHInline
#if OUTSIDE_STREAMERBOT
    : Streamer.bot.Plugin.Interface.CPHInlineBase
#endif
{

    public bool SendTestNotification()
    {
        CPH.TryGetArg("rawInput", out string rawInput);
        var notification = new Notification("Weeb6279", rawInput);
        StreamNotification.SendStreamrebotWidgetNotification(CPH, notification);
        return true;
    }
}