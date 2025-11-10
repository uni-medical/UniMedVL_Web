/**
 * Image Comparison Slider Component
 * 图像对比滑块组件
 */

class ImageCompare {
  constructor(container) {
    this.container = container;
    this.slider = container.querySelector('.image-compare-slider');
    this.overlay = container.querySelector('.image-compare-overlay');
    this.overlayImg = this.overlay.querySelector('img');
    this.wrapper = container.querySelector('.image-compare-wrapper');
    this.isDragging = false;

    this.init();
  }

  init() {
    // 等待图片加载完成后设置尺寸
    const afterImg = this.container.querySelector('.image-compare-after');
    if (afterImg.complete) {
      this.updateOverlayImageWidth();
    } else {
      afterImg.addEventListener('load', () => {
        this.updateOverlayImageWidth();
      });
    }

    // 窗口resize时重新计算
    window.addEventListener('resize', () => this.updateOverlayImageWidth());

    // 鼠标事件
    this.slider.addEventListener('mousedown', this.startDrag.bind(this));
    document.addEventListener('mousemove', this.onDrag.bind(this));
    document.addEventListener('mouseup', this.stopDrag.bind(this));

    // 触摸事件 (移动端支持)
    this.slider.addEventListener('touchstart', this.startDrag.bind(this));
    document.addEventListener('touchmove', this.onDrag.bind(this));
    document.addEventListener('touchend', this.stopDrag.bind(this));

    // 防止图片被拖拽
    const images = this.container.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('dragstart', (e) => e.preventDefault());
    });
  }

  updateOverlayImageWidth() {
    // 获取底层图片的实际显示尺寸
    const afterImg = this.container.querySelector('.image-compare-after');
    const displayWidth = afterImg.offsetWidth;
    const displayHeight = afterImg.offsetHeight;

    // 让遮罩层内的图片使用相同的显示尺寸,确保完美对齐
    this.overlayImg.style.width = displayWidth + 'px';
    this.overlayImg.style.height = displayHeight + 'px';
  }

  startDrag(e) {
    e.preventDefault();
    this.isDragging = true;
    this.container.style.cursor = 'ew-resize';
  }

  stopDrag() {
    this.isDragging = false;
    this.container.style.cursor = 'default';
  }

  onDrag(e) {
    if (!this.isDragging) return;

    e.preventDefault();

    // 获取鼠标或触摸位置
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;

    // 计算相对于容器的位置
    const rect = this.container.getBoundingClientRect();
    let offsetX = clientX - rect.left;

    // 限制在容器范围内
    offsetX = Math.max(0, Math.min(offsetX, rect.width));

    // 计算百分比
    const percentage = (offsetX / rect.width) * 100;

    // 更新滑块和遮罩位置
    this.slider.style.left = percentage + '%';
    this.overlay.style.width = percentage + '%';
  }
}

// 初始化所有图像对比组件
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.image-compare-container');
  containers.forEach(container => {
    new ImageCompare(container);
  });
});
