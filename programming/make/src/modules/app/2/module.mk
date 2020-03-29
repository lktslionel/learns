MOD_2 = 2

app:
ifndef VAR 
		$(error VAR in required)
endif
ifndef VAR1 
		$(error VAR1 in required)
endif
ifndef VAR2 
		$(error VAR2 in required)
endif
ifndef VAR3 
		$(error VAR3 in required)
endif
		@echo VAR=$(VAR) VAR1=$(VAR1) VAR2=$(VAR2)


FILES := $(shell ls -m $(HOME))

.PHONY = echols
echols:
	@echo $(FILES:,=:)

.PHONY = app\:help
app\:help: test
		@echo $@ -- $% --- $*
		@echo "clean        : remove all build, test, coverage and Python artifacts"
		@echo "clean-build  : remove build artifacts"
		@echo "clean-pyc    : remove Python file artifacts"
		@echo "clean-test   : remove test and coverage artifacts"
		@echo "lint         : check style with flake8"
		@echo "test         : run tests quickly with the default Python"
		@echo "test-all     : run tests on every Python version with tox"
		@echo "coverage     : check code coverage quickly with the default Python"
		@echo "docs         : generate Sphinx HTML documentation, including API docs"
		@echo "release      : package and upload a release"
		@echo "dist         : package"
		@echo "install      : install the package to the active Python's site-packages"