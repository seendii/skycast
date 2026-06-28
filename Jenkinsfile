pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building SkyCast...'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing SkyCast...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment Successful'
            }
        }
    }

    post {
        success {
            echo 'Pipeline Completed Successfully!'
        }

        failure {
            echo 'Pipeline Failed!'
        }
    }
}
