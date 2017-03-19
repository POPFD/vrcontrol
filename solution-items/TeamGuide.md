# VR Control Team Guide #

VRControl of Rapiro Robot using NodeJS, Leap etc.fil

----------

## Connecting to Rapiro-Pi via VNC ##
1. Download VNC Viewer from [https://www.realvnc.com/download/viewer/](https://www.realvnc.com/download/viewer/)
2. Click File -> New Connection
3. Set VNC Server to `rapiro-pi.ddns.net:5900`
4. Set Name to `rapiro-pi-admin`
5. Click OK then double click on the newly created connection
6. Set Username to `admin`
7. Set Password to `VRcontrol17`
8. Tick remember password
9. Click OK 

## Connecting to Rapiro-Pi via SSH ##
1. Open your preferred SSH Client Putty etc.
2. Set host to `rapiro-pi.ddns.net`
3. Set Port to `22`
4. Username is `admin`
5. Password is `VRcontrol17`

## Connecting to Rapiro-Pi via FTP (Filezilla) ##
1. Download Filezilla from [https://filezilla-project.org/download.php?type=client](https://filezilla-project.org/download.php?type=client)
2. Click File -> Site Manager
3. Click New Site and name `rapiro-pi-admin`
4. Set host to `rapiro-pi.ddns.net`
5. Set Port to `22`
6. Set Protocol to `SFTP - SSH File Transfer Protocol`
7. Set Logon Type to `Normal`
8. Set User to `admin`
9. Set Password to `VRcontrol17`
10. Click connect

The connection will be saved and can be accessed again from Open Site Manager tab

## Accessing Visual Studio Code in Rapiro-Pi ##
Check to see if an instance is already open by hitting alt + tab or check the taskbar at the top (known bug sometimes disappears so use alt + tab or equivalent to OS you are on)

1. If an instance is not running open the terminal
2. Type `cd vscode` then hit enter
3. Type `./scripts/code.sh` then hit enter (be patient takes a while to fully load UI)

NOTE: The terminal command `./scripts/code.sh` is what runs VS code so if you need to make any commands in terminal open a new terminal instance. Be careful not to accidentally close the terminal running VS code or data could be lost (VS code autosave feature is turned on but it is not a guarantee to prevent data loss)
