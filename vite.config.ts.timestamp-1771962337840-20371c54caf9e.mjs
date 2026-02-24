// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import fs from "fs";
import path from "path";
var __vite_injected_original_dirname = "/home/project";
function copyPublicSafe() {
  return {
    name: "copy-public-safe",
    apply: "build",
    closeBundle() {
      const publicDir = path.resolve(__vite_injected_original_dirname, "public");
      const distDir = path.resolve(__vite_injected_original_dirname, "dist");
      if (!fs.existsSync(publicDir)) return;
      fs.readdirSync(publicDir).forEach((file) => {
        if (file.includes(" ")) return;
        try {
          fs.copyFileSync(path.join(publicDir, file), path.join(distDir, file));
        } catch (_) {
        }
      });
    }
  };
}
var vite_config_default = defineConfig({
  plugins: [react(), copyPublicSafe()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  build: {
    copyPublicDir: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmZ1bmN0aW9uIGNvcHlQdWJsaWNTYWZlKCk6IGltcG9ydCgndml0ZScpLlBsdWdpbiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2NvcHktcHVibGljLXNhZmUnLFxuICAgIGFwcGx5OiAnYnVpbGQnLFxuICAgIGNsb3NlQnVuZGxlKCkge1xuICAgICAgY29uc3QgcHVibGljRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYycpO1xuICAgICAgY29uc3QgZGlzdERpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdkaXN0Jyk7XG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMocHVibGljRGlyKSkgcmV0dXJuO1xuICAgICAgZnMucmVhZGRpclN5bmMocHVibGljRGlyKS5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICBpZiAoZmlsZS5pbmNsdWRlcygnICcpKSByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZnMuY29weUZpbGVTeW5jKHBhdGguam9pbihwdWJsaWNEaXIsIGZpbGUpLCBwYXRoLmpvaW4oZGlzdERpciwgZmlsZSkpO1xuICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIGNvcHlQdWJsaWNTYWZlKCldLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICB9LFxuICBidWlsZDoge1xuICAgIGNvcHlQdWJsaWNEaXI6IGZhbHNlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixPQUFPLFFBQVE7QUFDZixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFLekMsU0FBUyxpQkFBd0M7QUFDL0MsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsY0FBYztBQUNaLFlBQU0sWUFBWSxLQUFLLFFBQVEsa0NBQVcsUUFBUTtBQUNsRCxZQUFNLFVBQVUsS0FBSyxRQUFRLGtDQUFXLE1BQU07QUFDOUMsVUFBSSxDQUFDLEdBQUcsV0FBVyxTQUFTLEVBQUc7QUFDL0IsU0FBRyxZQUFZLFNBQVMsRUFBRSxRQUFRLFVBQVE7QUFDeEMsWUFBSSxLQUFLLFNBQVMsR0FBRyxFQUFHO0FBQ3hCLFlBQUk7QUFDRixhQUFHLGFBQWEsS0FBSyxLQUFLLFdBQVcsSUFBSSxHQUFHLEtBQUssS0FBSyxTQUFTLElBQUksQ0FBQztBQUFBLFFBQ3RFLFNBQVMsR0FBRztBQUFBLFFBQUM7QUFBQSxNQUNmLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7QUFBQSxFQUNuQyxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsRUFDakI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
