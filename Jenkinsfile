pipeline{
    agent any

    tools{
        nodejs NodeJS_21
    }

    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }
           stage('Install Node.js and npm') {
            steps {
                sh 'npm install'
            }
        }
         stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}