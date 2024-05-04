import { createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/components/pages/HomePage.vue';
import AboutPage from '@/components/pages/AboutPage.vue';
import ProjectsPage from '@/components/pages/ProjectsPage.vue'
import LearningPage from '@/components/pages/LearningPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'Home',
      meta: { scrollToTop: true }
    },
    {
      path: '/about',
      component: AboutPage,
      name: 'About',
      meta: { scrollToSection: 'about' }
    },
    {
      path: '/projects',
      component: ProjectsPage,
      name: 'Projects',
      meta: { scrollToSection: 'projects' }
    },
    {
      path: '/learning',
      component: LearningPage,
      name: 'Learning',
      meta: { scrollToSection: 'learning' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.meta.scrollToTop) {
      return { top: 0 };
    } else if (to.meta.scrollToSection) {
      const sectionElement = document.getElementById(to.meta.scrollToSection);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' }); // Исправлено здесь
      }
    }
  }
});

export default router;