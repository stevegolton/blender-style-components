// Application state
export interface AppState {
  navCollapsed: boolean;
  activeTab: string;
  activePrimaryTab: string;
  activeSecondaryTab: string;
  detailsPanelHeight: number;
  collapsedTrackGroups: Record<string, boolean>;
  collapsedTracks: Record<string, boolean>;
}

export const State: AppState = {
  navCollapsed: false,
  activeTab: 'Scene',
  activePrimaryTab: 'Selection',
  activeSecondaryTab: 'Summary',
  detailsPanelHeight: 200,
  collapsedTrackGroups: {},
  collapsedTracks: {}
};

// Theme management
export function loadTheme(): void {
  const savedTheme = localStorage.getItem('bl-theme');
  if (savedTheme === 'light') {
    document.body.classList.add('bl-theme-light');
  }
}

export function toggleTheme(): void {
  document.body.classList.toggle('bl-theme-light');
  const isLight = document.body.classList.contains('bl-theme-light');
  localStorage.setItem('bl-theme', isLight ? 'light' : 'dark');
}
