#vars
tag=0
REPO=orky161
ORGANIZATION=test
PROJECT=mono-profile
IMAGE=ghcr.io/${REPO}/${ORGANIZATION}-${PROJECT}:${tag}

build-profile:
	    @docker image build . -t ${IMAGE} -f ./services/profile/Dockerfile

build-notify:
	    @docker image build . -t ${IMAGE} -f ./services/notify/Dockerfile


