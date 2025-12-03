// 主 CTA 按钮点击时增加一段光晕动画
const primaryBtn = document.querySelector(".hero-btn");

if (primaryBtn) {
  primaryBtn.addEventListener("click", (event) => {
    // 如果你只是想看动画，又不想立刻跳转，可以先解开这一行注释：
    // event.preventDefault();

    // 触发一次「按下光晕」动画
    primaryBtn.classList.remove("btn-glow-pressed");
    // 强制重绘，确保重复点击也能触发动画
    void primaryBtn.offsetWidth;
    primaryBtn.classList.add("btn-glow-pressed");
  });
}

// 次级按钮：暂时只是提示（之后可以跳到 My Spaces）
const secondaryBtn = document.querySelector(".hero-secondary-btn");

if (secondaryBtn) {
  secondaryBtn.addEventListener("click", () => {
    alert("这里以后可以跳转到「我的空间 My Spaces」页面。");
  });
}
