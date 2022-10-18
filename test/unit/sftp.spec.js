const {sftp,objectSFTPReq,objectSFTPOpt} = require('sftp-cg-lib');

describe('Suite to test a sftp component', () => {
    jest.setTimeout(9000);
    //const expect_api = JSON.parse(fs.readFileSync(path.join(__dirname, 'pokeapiResponse.json'), {encoding: 'utf8'}));
    //const expect_api_secure = (fs.readFileSync(path.join(__dirname, 'secureApi.txt'), {encoding: 'utf8'}));

    //arreglar
    //estimulo
    //observar el resultado
    test('test sftp to CREATEDIRECTORY with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "admin";
        properties.password = "admin"; 
        properties.flag = "CREATEDIRECTORY";
        properties.nameDirectory = "newDir/otherdir";
        properties.path = "/";

        const data = await sftp({}, properties, true);
        console.log(JSON.stringify(data));
        expect(JSON.stringify(data)).toContain("created");
    });

    test('test sftp to CREATEDIRECTORY with wrong parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "adminx";
        properties.password = "adminx"; 
        properties.flag = "CREATEDIRECTORY";
        properties.nameDirectory = "newDir/otherdir";
        properties.path = "/";

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

    test('test sftp to DELETEDIRECTORY with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "admin";
        properties.password = "admin"; 
        properties.flag = "DELETEDIRECTORY";
        properties.nameDirectory = "newDir/otherdir";
        properties.path = "/";

        const data = await sftp({}, properties, true);
        console.log(JSON.stringify(data));
        expect(data).toContain("Successfully removed directory");
    });
    test('test sftp to DELETEDIRECTORY with wrong parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "adminX";
        properties.password = "adminX"; 
        properties.flag = "DELETEDIRECTORY";
        properties.nameDirectory = "newDir/otherdir";
        properties.path = "/";

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

    test('test sftp to SAVEFILE with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "admin";
        properties.password = "admin"; 
        properties.flag = "SAVEFILE";
        properties.path = "newDir";
        properties.content = "dGVzdCBvZiBhIHNmdHAgY29tcG9uZW50";
        properties.file = "saveNewFile.txt";

        const data = await sftp({}, properties, true);
        console.log(JSON.stringify(data));
        expect(data).toContain("Uploaded data stream to");
    });
    test('test sftp to SAVEFILE with wrong parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "adminX";
        properties.password = "adminX"; 
        properties.flag = "SAVEFILE";
        properties.path = "newDir";
        properties.content = "dGVzdCBvZiBhIHNmdHAgY29tcG9uZW50";
        properties.file = "saveNewFile.txt";

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

    test('test sftp to GETFILE with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "admin";
        properties.password = "admin"; 
        properties.flag = "GETFILE";
        properties.path = "newDir";
        properties.file = "saveNewFile.txt";

        const data = await sftp({}, properties, true);
        console.log(JSON.stringify(data));
        expect(JSON.stringify(data)).toContain("dGVzdCBvZiBhIHNmdHAgY29tcG9uZW50");
    });
    test('test sftp to GETFILE with wrong parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "adminx";
        properties.password = "adminx"; 
        properties.flag = "GETFILE";
        properties.path = "newDir";
        properties.file = "saveNewFile.txt";

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

    test('test sftp to RENAMEFILE with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "admin";
        properties.password = "admin"; 
        properties.flag = "RENAMEFILE";
        properties.path = "newDir";
        properties.file = "saveNewFile.txt"; 
        properties.nameNewFile = "renameNewName.txt";
    
        const data = await sftp({}, properties, true);
        console.log(JSON.stringify(data));
        expect(data).toContain("Successfully renamed");
    });
    test('test sftp to RENAMEFILE with wrong parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "admin";
        properties.password = "admin"; 
        properties.flag = "RENAMEFILE";
        properties.path = "newDir";
        properties.file = "saveNewFile.txt"; 
        properties.nameNewFile = "renameNewName.txt";

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

    test('test sftp to DOWNLOADIRECTORY with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "admin";
        properties.password = "admin"; 
        properties.flag = "DOWNLOADIRECTORY";
        properties.nameDirectory = "C://Users//DMV//Documents";
        properties.path = "/";

        const data = await sftp({}, properties, true);
        console.log(JSON.stringify(data));
        expect(data).toContain("downloaded to");
    });
    test('test sftp to DOWNLOADIRECTORY with wrong parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "admin";
        properties.password = "admin"; 
        properties.flag = "DOWNLOADIRECTORY";
        properties.path = "/";
        properties.nameDirectory = "C://Users//Documents";

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

    test('test sftp to DELETEFILE with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "admin";
        properties.password = "admin"; 
        properties.flag = "DELETEFILE";
        properties.file = "renameNewName.txt";
        properties.path ="newDir";

        const data = await sftp({}, properties, true);
        console.log(JSON.stringify(data));
        expect(JSON.stringify(data)).toContain("Successfully deleted");
    });
    test('test sftp to DELETEFILE with wrong parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "adminx";
        properties.password = "adminx"; 
        properties.flag = "DELETEFILE";
        properties.file = "newDir/renameNewName.txt"

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

    test('test sftp to GETLISTFILES with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "admin";
        properties.password = "admin"; 
        properties.flag = "GETLISTFILES";
        properties.path = "/";

        const data = await sftp({}, properties, true);
        console.log(JSON.stringify(data));
        expect(JSON.stringify(data)).toContain("newDir");
    });
    test('test sftp to GETLISTFILES with wrong parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "adminx";
        properties.password = "adminx"; 
        properties.flag = "GETLISTFILES";
        properties.path = "/";

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

    test('test sftp to UPLOADIRECTORY with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "admin";
        properties.password = "admin"; 
        properties.flag = "UPLOADIRECTORY";
        properties.path = "/";
        properties.nameDirectory = "C://Users//DMV//Documents//myFolder";

        const data = await sftp({}, properties, true);
        console.log(JSON.stringify(data));
        expect(JSON.stringify(data)).toContain("uploaded to");
    });
    test('test sftp to UPLOADIRECTORY with wrong parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "localhost"; 
        properties.port = "22";
        properties.username = "adminX";
        properties.password = "adminX"; 
        properties.flag = "UPLOADIRECTORY";
        properties.path = "/";
        properties.localDirectory = "C://Users//DMV//Documents//myFolder";

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

	test('test sftp to GETLISTFILES with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "34.207.130.95"; 
        properties.port = "22";
        properties.username = "mysftpUser";
        properties.password = "Cloudgen@123";
        properties.flag = "GETLISTFILES";
        properties.path = "/mysftpUser/testserver/incoming/Test/";

        const data = await sftp({}, properties, true);
        //console.log(JSON.stringify(data));
        await expect(JSON.stringify(data)).toContain("type");
    });
    test('test sftp to DOWNLOADIRECTORY with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "34.207.130.95"; 
        properties.port = "22";
        properties.username = "mysftpUser";
        properties.password = "Cloudgen@123";
        properties.flag = "DOWNLOADIRECTORY";
        properties.nameDirectory = "C://Users//DMV//Documents";
        properties.path = "/mysftpUser/testserver/incoming/Test/newDir";

        const data = await sftp({}, properties, true);
        //console.log(JSON.stringify(data));
        await expect(data).toContain("downloaded to");
    });

    test('test sftp to GETFILE with No such file error', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "34.207.130.95"; 
        properties.port = "22";
        properties.username = "mysftpUser";
        properties.password = "Cloudgen@123";
        properties.flag = "GETFILE";
        properties.path = "/mysftpUser/testserver/incoming/Test/";
        properties.file = "810-1.edi";

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });
    
    test('test sftp to DELETEDIRECTORY with wrong directory', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "34.207.130.95"; 
        properties.port = "22";
        properties.username = "mysftpUser";
        properties.password = "Cloudgen@123";
        properties.flag = "DELETEDIRECTORY";
        properties.nameDirectory = "/mysftpUser/testserver/incoming/Test/newDir/otherdir";
        properties.path = "/";

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

    test('test sftp to SAVEFILE with wrong grants', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "34.207.130.95"; 
        properties.port = "22";
        properties.username = "mysftpUser";
        properties.password = "Cloudgen@123";
        properties.flag = "/mysftpUser/testserver/incoming/Test/SAVEFILE";
        properties.path = "newDir";
        properties.content = "dGVzdCBvZiBhIHNmdHAgY29tcG9uZW50";
        properties.file = "saveNewFile.txt";

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

    test('test sftp to RENAMEFILE an unexistant file', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "34.207.130.95"; 
        properties.port = "22";
        properties.username = "mysftpUser";
        properties.password = "Cloudgen@123";
        properties.flag = "RENAMEFILE";
        properties.path = "/mysftpUser/testserver/incoming/Test/newDir";
        properties.file = "saveNewFile.txt"; 
        properties.nameNewFile = "renameNewName.txt";

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

    test('test sftp to DELETEFILE an unexistant file', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "34.207.130.95"; 
        properties.port = "22";
        properties.username = "mysftpUser";
        properties.password = "Cloudgen@123";
        properties.flag = "DELETEFILE";
        properties.file = "/mysftpUser/testserver/incoming/Test/newDir/renameNewName.txt"

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

    test('test sftp to UPLOADIRECTORY without grants', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "34.207.130.95"; 
        properties.port = "22";
        properties.username = "mysftpUser";
        properties.password = "Cloudgen@123";
        properties.flag = "UPLOADIRECTORY";
        properties.path = "/mysftpUser/testserver/incoming/Test/";
        properties.localDirectory = "C://Users//DMV//Documents//myFolder";

        await expect(sftp({}, properties, true)).rejects.toThrow();
    });

















    
    test('test sftp to SAVEFILE with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "nephum.com";
        properties.port = 22;
        properties.username = "ubuntu";
        properties.key = "C:/Users/DMV/Desktop/NodeProject/MobaXterm_Portable_v22.1/Keypair6Delta.ppk";
        properties.flag = "SAVEFILE";
        properties.path = "/home/ubuntu/OIH/componentes/temp/input/";
        properties.content = "dGVzdCBvZiBhIHNmdHAgY29tcG9uZW50";
        properties.file = "saveNewFile.txt";

        const data = await sftp({}, properties, true);
        await expect(data).toContain("Uploaded data stream to");
    });

    test('test sftp to GETFILE with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "nephum.com";
        properties.port = 22;
        properties.username = "ubuntu";
        properties.key = "C:/Users/DMV/Desktop/NodeProject/MobaXterm_Portable_v22.1/Keypair6Delta.ppk";
        properties.flag = "GETFILE";
        properties.path = "/home/ubuntu/OIH/componentes/temp/input/";
        properties.file = "saveNewFile.txt";

        const data = await sftp({}, properties, true);
        //console.log(JSON.stringify(data));
        await expect(JSON.stringify(data)).toContain("dGVzdCBvZiBhIHNmdHAgY29tcG9uZW50");
    });

    test('test sftp to RENAMEFILE with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "nephum.com";
        properties.port = 22;
        properties.username = "ubuntu";
        properties.key = "C:/Users/DMV/Desktop/NodeProject/MobaXterm_Portable_v22.1/Keypair6Delta.ppk";
        properties.flag = "RENAMEFILE";
        properties.path = "/home/ubuntu/OIH/componentes/temp/input/";
        properties.file = "saveNewFile.txt"; 
        properties.nameNewFile = "renameNewName.txt";
    
        const data = await sftp({}, properties, true);
        //console.log(JSON.stringify(data));
        expect(data).toContain("Successfully renamed");
    });

    test('test sftp to DELETEFILE with rigth parameters', async () => {
		let properties = {...objectSFTPReq,objectSFTPOpt};
		properties.host = "nephum.com";
		properties.port = 22;
		properties.username = "ubuntu";
		properties.key = "C:/Users/DMV/Desktop/NodeProject/MobaXterm_Portable_v22.1/Keypair6Delta.ppk";
		properties.flag = "DELETEFILE";
		properties.file = "renameNewName.txt";
		properties.path ="/home/ubuntu/OIH/componentes/temp/input/";

        const data = await sftp({}, properties, true);
        //console.log(JSON.stringify(data));
		expect(JSON.stringify(data)).toContain("Successfully deleted");
	});

    test('test sftp to GETLISTFILES with rigth parameters', async () => {
        let properties = {...objectSFTPReq,objectSFTPOpt};
        properties.host = "nephum.com";
        properties.port = 22;
        properties.username = "ubuntu";
        properties.key = "C:/Users/DMV/Desktop/NodeProject/MobaXterm_Portable_v22.1/Keypair6Delta.ppk";
        properties.flag = "GETLISTFILES";
        properties.path = "/home/ubuntu/OIH/componentes/temp/input/";

        const data = await sftp({}, properties, true);
        console.log(JSON.stringify(data));
        expect(JSON.stringify(data)).toContain("pruebabase64-2.txt");
    });
})