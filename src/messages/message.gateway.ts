import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3001, { cors: { origin: '*' } })
export class MessageGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(MessageGateway.name);
  @WebSocketServer() server: Server;

  private channels = new Map<string, Set<string>>(); // channelId -> Set of clientIds

  afterInit() {
    this.logger.log("WebSocket Gateway Initialized");
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
    this.channels.forEach((clients, channelId) => clients.delete(client.id));
  }

  @SubscribeMessage('joinChannel')
  handleJoinChannel(client: Socket, channelId: string) {
    if (!this.channels.has(channelId)) {
      this.channels.set(channelId, new Set());
    }
    this.channels.get(channelId).add(client.id);
    client.join(channelId);
    this.logger.log(`Client ${client.id} joined channel ${channelId}`);
  }

  @SubscribeMessage('sendMessage')
  handleSendMessage(client: Socket, payload: { message: string; channel: string; senderId: string }) {
    const { message, channel, senderId } = payload;
    const newMessage = { sender: senderId, content: message };

    // Emit to all clients in the specified channel
    this.server.to(channel).emit('receiveMessage', newMessage);
    this.logger.log(`Message sent in channel ${channel}: ${message}`);
  }
}
