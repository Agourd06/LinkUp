// video.gateway.ts
import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class VideoGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('joinCall')
  handleJoinCall(client: Socket, channelId: string) {
    client.join(channelId);
    console.log(`Client joined room: ${channelId}`);
  }

  @SubscribeMessage('offer')
  handleOffer(client: Socket, data: { offer: RTCSessionDescriptionInit; roomId: string }) {
    this.server.to(data.roomId).emit('offer', data.offer);
  }

  @SubscribeMessage('answer')
  handleAnswer(client: Socket, data: { answer: RTCSessionDescriptionInit; roomId: string }) {
    this.server.to(data.roomId).emit('answer', data.answer);
  }

  @SubscribeMessage('ice-candidate')
  handleIceCandidate(client: Socket, data: { candidate: RTCIceCandidateInit; roomId: string }) {
    this.server.to(data.roomId).emit('ice-candidate', data.candidate);
  }
}
