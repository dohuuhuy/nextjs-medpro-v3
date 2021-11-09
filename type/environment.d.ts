declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'testing' | 'production';
      ENV: 'development' | 'testing' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}