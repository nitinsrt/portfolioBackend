pipeline{
    agent any

    tools{
        nodejs 'NodeJS_21'
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
        stage('Build Image'){
            steps{
                sh 'docker build -t portfolio-backend:1.0 .'
            }
        }
    }
}