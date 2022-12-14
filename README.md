[![N|Solid](https://cloudgensys.com/cg-demo/wp-content/uploads/2019/05/CG-Logo-01.png)](https://www.cloudgensys.com/)

# sftp-component

This component is based on Open Integration Hub framework, allowing this to connect with other components in order to have different flow exchanging data in a specific goal of transformation for the information.

This component allows to open a connection with a sftp server.

## Features

- Create a directory in an specific path.
- Delete the directory and their content.
- Delete a file in an specific path.
- Download the directory inside an sftp in a local machine.
- Get the content of a file, an specific enconding can be requested.
- Get the list of files and directgories inside a specific path.
- Rename a file inside a path.
- Create a file inside the sftp server, the content of the file is a string that can have an specific encondig, the enconding must be specified.
- Take a directory for a local machine and save the content inside an sftp server.

## Libraries

- [msgbroker-nxg-cg](https://www.npmjs.com/package/msgbroker-nxg-cg)
- [utils-nxg-cg](https://www.npmjs.com/package/utils-nxg-cg)
- [loging-elastic-cg-lib](https://www.npmjs.com/package/loging-elastic-cg-lib)
- [sftp-cg-lib](https://www.npmjs.com/package/sftp-cg-lib)

> For more detail of the functionality review **sftp-cg-lib** documentation

## Installation

Docker image: cloudgenuser/sftp-component:1.0.0

Functions
- trigger:
  - sftp_source
- action:
  - sftp

Fields:
- content: The string that containt the file that will be get from the sftp or the file that will be created. It can be a base64, utf8 or other enconding.
- encoding: The enconging that that will be used to get the file, if this parameter is not sended base64 will be taken as default.
- file: The name of the file that will be deleted inside the sftp, the name of the file that will be renamed inside the sftp or the file that will be get or delete inside the sftp.
- flag: The string that contains the actinon to execute, can be one of this: CREATEDIRECTORY, DELETEDIRECTORY, DELETEFILE, DOWNLOADIRECTORY, GETFILE, GETLISTFILES, RENAMEFILE, SAVEFILE, UPLOADIRECTORY. The string is not case sensitive.
- host: The host where the connection will be stablished, can be a url or ip.
- key: Parameter that have the path where is the key and the name of the key file that can stablish connection with the sftp, if this parameter is used avoid to use the password parameter, in case the two parameters are specified this will have priority and the password will be ignored.
- nameDirectory: The nama of the directory that will be created in the sftp, deleted in the sftp or download in out local machine or upload from the local machine.
- nameNewFile: The new name of the file that will be used.
- password: This parameter contains the password that can stablish connection with the sftp.
- path: The full path where the action will be done, can be: create the directory in the sftp, delete a directory in the sftp, where a file in the sftp is (to delete, create, get or rename), the directory that will be downloaded from the sftp or the location that will be uploaded inside the sftp.
- port: The port that is open to access to the sftp server.
- username: The username that have grants to connect with the sftp server.
