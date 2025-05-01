module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/newgenai79/ClearerVoice-Studio app"
        ],
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        path: "app",
        params: {
          venv: "env",          
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",              
        path: "app",
        message: [
          "python -m pip install -U pip",
          "pip install wheel",
          "pip install -r requirements.txt",
          "pip install streamlit", // use streamlit run UI app
          "huggingface-cli download --repo-type space alibabasglab/ClearVoice --include checkpoints/* --local-dir ."
          "huggingface-cli download --repo-type space alibabasglab/ClearVoice --include models/* --local-dir ."
          
          
        ],
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "env"
      }
    }
  ]
}

