import { lerp, unlerp } from './utils.js';
import { bell } from './transitions.js'

export class DefaultModule {
  constructor(name, assets) {
    this.name = name;
    this.step = 0;
  }

  handleFrameData(frameNumber, frameData) {
    const alpha = unlerp(-1, 1, Math.cos(this.step));
    this.step += 1.1;
    return { alpha, frameNumber, ...frameData };
  }

  reinitScene(container) {
    this.back = PIXI.Sprite.fromFrame('background');
    this.back.anchor.set(0.5);
    this.back.alpha = 0.5;
    this.back.position.set(960, 540);
    container.addChild(this.back);
  }

  updateScene(previousData, currentData, progress) {
    this.back.scale.set(1.7 * 2 + Math.cos(lerp(previousData.frameNumber, currentData.frameNumber, progress) * 1 / 2 * Math.PI));
    this.back.alpha = lerp(previousData.alpha, currentData.alpha, progress) / 2 + 0.5;
  }
}