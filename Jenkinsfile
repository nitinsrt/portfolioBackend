pipeline{
    agent any
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }
           stage('Install Node.js and npm') {
            steps {
                script {
                    sh 'sudo apt update'
                    sh 'sudo apt install -y nodejs'
                    sh 'sudo apt install -y npm'
                }
            }
        }
         stage('Build') {
            steps {
                // Your build steps using npm
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}