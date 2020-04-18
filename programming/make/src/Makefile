
MODULES := $(wildcard  modules/*/*/module.mk)

include $(MODULES)

-include toto.mk

inc: 
ifndef TOTO
	@echo not defined
else
	@echo $(TOTO)
endif

test: 
	@echo $(MOD_1)
	@echo $(MOD_2)