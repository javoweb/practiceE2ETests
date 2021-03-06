** En la primera ejecución se debe definir la variable de entorno ANDROIS_HOME
export ANDROID_HOME=/home/<user>/Android/Sdk/

**Para ejecutar se debe entrgar como parametro el archivo de config
bundle exec kraken-mobile run --properties=config.json

** En caso de haber un fallo en la ejecución setear esta variable de entorno
export PATH=$PATH:$ANDROID_HOME/platform-tools