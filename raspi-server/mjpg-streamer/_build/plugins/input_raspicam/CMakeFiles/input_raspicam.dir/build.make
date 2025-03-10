# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.6

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/_build

# Include any dependencies generated for this target.
include plugins/input_raspicam/CMakeFiles/input_raspicam.dir/depend.make

# Include the progress variables for this target.
include plugins/input_raspicam/CMakeFiles/input_raspicam.dir/progress.make

# Include the compile flags for this target's objects.
include plugins/input_raspicam/CMakeFiles/input_raspicam.dir/flags.make

plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.o: plugins/input_raspicam/CMakeFiles/input_raspicam.dir/flags.make
plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.o: ../plugins/input_raspicam/input_raspicam.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/_build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.o"
	cd /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/_build/plugins/input_raspicam && /usr/bin/cc  $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/input_raspicam.dir/input_raspicam.c.o   -c /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/plugins/input_raspicam/input_raspicam.c

plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/input_raspicam.dir/input_raspicam.c.i"
	cd /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/_build/plugins/input_raspicam && /usr/bin/cc  $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/plugins/input_raspicam/input_raspicam.c > CMakeFiles/input_raspicam.dir/input_raspicam.c.i

plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/input_raspicam.dir/input_raspicam.c.s"
	cd /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/_build/plugins/input_raspicam && /usr/bin/cc  $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/plugins/input_raspicam/input_raspicam.c -o CMakeFiles/input_raspicam.dir/input_raspicam.c.s

plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.o.requires:

.PHONY : plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.o.requires

plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.o.provides: plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.o.requires
	$(MAKE) -f plugins/input_raspicam/CMakeFiles/input_raspicam.dir/build.make plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.o.provides.build
.PHONY : plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.o.provides

plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.o.provides.build: plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.o


# Object files for target input_raspicam
input_raspicam_OBJECTS = \
"CMakeFiles/input_raspicam.dir/input_raspicam.c.o"

# External object files for target input_raspicam
input_raspicam_EXTERNAL_OBJECTS =

plugins/input_raspicam/input_raspicam.so: plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.o
plugins/input_raspicam/input_raspicam.so: plugins/input_raspicam/CMakeFiles/input_raspicam.dir/build.make
plugins/input_raspicam/input_raspicam.so: plugins/input_raspicam/CMakeFiles/input_raspicam.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/_build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking C shared library input_raspicam.so"
	cd /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/_build/plugins/input_raspicam && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/input_raspicam.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
plugins/input_raspicam/CMakeFiles/input_raspicam.dir/build: plugins/input_raspicam/input_raspicam.so

.PHONY : plugins/input_raspicam/CMakeFiles/input_raspicam.dir/build

plugins/input_raspicam/CMakeFiles/input_raspicam.dir/requires: plugins/input_raspicam/CMakeFiles/input_raspicam.dir/input_raspicam.c.o.requires

.PHONY : plugins/input_raspicam/CMakeFiles/input_raspicam.dir/requires

plugins/input_raspicam/CMakeFiles/input_raspicam.dir/clean:
	cd /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/_build/plugins/input_raspicam && $(CMAKE_COMMAND) -P CMakeFiles/input_raspicam.dir/cmake_clean.cmake
.PHONY : plugins/input_raspicam/CMakeFiles/input_raspicam.dir/clean

plugins/input_raspicam/CMakeFiles/input_raspicam.dir/depend:
	cd /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/_build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/plugins/input_raspicam /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/_build /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/_build/plugins/input_raspicam /home/admin/Downloads/mjpg-streamer-master/mjpg-streamer-experimental/_build/plugins/input_raspicam/CMakeFiles/input_raspicam.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : plugins/input_raspicam/CMakeFiles/input_raspicam.dir/depend

