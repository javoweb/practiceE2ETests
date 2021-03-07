** En la primera ejecución se debe definir la variable de entorno ANDROID_HOME
export ANDROID_HOME=/home/<user>/Android/Sdk/

**Para ejecutar se debe entrgar como parametro el archivo de config (en este archivo están las credenciales de acceso a Ghost)
bundle exec kraken-mobile run --properties=config.json

** En caso de haber un fallo en la ejecución setear esta variable de entorno
export PATH=$PATH:$ANDROID_HOME/platform-tools