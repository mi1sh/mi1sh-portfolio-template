import { ref, onUnmounted, watch } from 'vue'

export function useActiveSectionService() {
  const activeSection = ref('home');
  const animate = ref(false);

  const checkActiveSection = () => {
    const sections = ['home', 'about', 'projects', 'learning'];
    let currentSection = 'home';

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
        }
      }
    });

    if (activeSection.value !== currentSection) {
      activeSection.value = currentSection;
      animate.value = true; // Активируем анимацию только если текущий раздел изменился
    }
  };

  watch(activeSection, () => {
    animate.value = true;
  });

  watch(animate, (newValue) => {
    if (newValue) {
      // Задержка перед сбросом animate, чтобы анимация успела активироваться
      setTimeout(() => {
        animate.value = false;
      }, 1000);
    }
  });

  window.addEventListener('scroll', checkActiveSection);

  onUnmounted(() => {
    window.removeEventListener('scroll', checkActiveSection);
  });

  return { activeSection, animate };
}