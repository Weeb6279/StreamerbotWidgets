export interface TwitchChatMessageData {
  message: TwitchChatMessageMessage
  user: TwitchChatMessageUser
  messageId: string
  meta: TwitchChatMessageMeta
  anonymous: boolean
  text: string
  emotes: TwitchChatMessageEmote[]
  parts: TwitchChatMessagePart[]
  isReply: boolean
  isSharedChat: boolean
  isTest: boolean
}

export interface TwitchChatMessageMessage {
  internal: boolean
  msgId: string
  clientNonce: string
  userId: string
  username: string
  role: number
  subscriber: boolean
  displayName: string
  color: string
  channel: string
  message: string
  isHighlighted: boolean
  isMe: boolean
  isCustomReward: boolean
  isAnonymous: boolean
  isReply: boolean
  bits: number
  firstMessage: boolean
  returningChatter: boolean
  hasBits: boolean
  emotes: TwitchChatMessageEmote[]
  cheerEmotes: never[]
  badges: TwitchChatMessageBadge[]
  monthsSubscribed: number
  isTest: boolean
  sharedChat: boolean
  sourceBadges: never[]
}

export interface TwitchChatMessageEmote {
  id: string
  type: string
  name: string
  startIndex: number
  endIndex: number
  imageUrl: string
}

export interface TwitchChatMessageBadge {
  name: string
  version: string
  imageUrl: string
  info: string
}

export interface TwitchChatMessageUser {
  role: number
  badges: TwitchChatMessageBadge[]
  color: string
  subscribed: boolean
  monthsSubscribed: number
  id: string
  login: string
  name: string
  type: string
}

export interface TwitchChatMessageMeta {
  internal: boolean
  clientNonce: string
  firstMessage: boolean
  returningChatter: boolean
  isHighlighted: boolean
  isMe: boolean
  isCustomReward: boolean
  isTest: boolean
}

export interface TwitchChatMessagePart {
  source: string
  imageUrl: string
  type: string
  text: string
}
