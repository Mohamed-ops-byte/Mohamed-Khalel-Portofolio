import { initialGalleries, initialServices } from './demoData';

const STORAGE_KEYS = {
  services: 'demo_services',
  galleries: 'demo_galleries',
};

const loadData = (key, fallback) => {
  const raw = localStorage.getItem(key);
  if (!raw) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }

  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch (err) {
    console.warn('Failed to parse demo storage', err);
  }

  localStorage.setItem(key, JSON.stringify(fallback));
  return fallback;
};

const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getDemoServices = () => loadData(STORAGE_KEYS.services, initialServices);
export const getDemoGalleries = () => loadData(STORAGE_KEYS.galleries, initialGalleries);

export const updateDemoService = (id, updates) => {
  const services = getDemoServices();
  const next = services.map((service) =>
    service.id === id ? { ...service, ...updates } : service
  );
  saveData(STORAGE_KEYS.services, next);
  return next.find((service) => service.id === id) || null;
};

export const deleteDemoService = (id) => {
  const services = getDemoServices();
  const next = services.filter((service) => service.id !== id);
  saveData(STORAGE_KEYS.services, next);
  return next;
};

export const updateDemoGallery = (id, updates) => {
  const galleries = getDemoGalleries();
  const next = galleries.map((gallery) =>
    gallery.id === id ? { ...gallery, ...updates } : gallery
  );
  saveData(STORAGE_KEYS.galleries, next);
  return next.find((gallery) => gallery.id === id) || null;
};

export const deleteDemoGallery = (id) => {
  const galleries = getDemoGalleries();
  const next = galleries.filter((gallery) => gallery.id !== id);
  saveData(STORAGE_KEYS.galleries, next);
  return next;
};

export const resetDemoData = () => {
  saveData(STORAGE_KEYS.services, initialServices);
  saveData(STORAGE_KEYS.galleries, initialGalleries);
};
