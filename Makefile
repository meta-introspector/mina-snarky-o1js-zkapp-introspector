#act_test:
#	act -s GITHUB_TOKEN="$(gh auth token)" -j deploy --matrix "node:20" #"os:ubuntu-latest"
act_test:
	act --secret-file .secrets -j deploy --matrix "node:20" #"os:ubuntu-latest"
