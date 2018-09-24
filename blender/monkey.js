// Monkey
var Monkey_vertices = [ 0.4375,-0.7656,0.1641,-0.4375,-0.7656,0.1641,0.5000,-0.6875,0.0938,-0.5000,-0.6875,0.0938,0.5469,-0.5781,0.0547,-0.5469,-0.5781,0.0547,0.3516,-0.6172,-0.0234,-0.3516,-0.6172,-0.0234,0.3516,-0.7188,0.0312,-0.3516,-0.7188,0.0312,0.3516,-0.7812,0.1328,-0.3516,-0.7812,0.1328,0.2734,-0.7969,0.1641,-0.2734,-0.7969,0.1641,0.2031,-0.7422,0.0938,-0.2031,-0.7422,0.0938,0.1562,-0.6484,0.0547,-0.1562,-0.6484,0.0547,0.0781,-0.6562,0.2422,-0.0781,-0.6562,0.2422,0.1406,-0.7422,0.2422,-0.1406,-0.7422,0.2422,0.2422,-0.7969,0.2422,-0.2422,-0.7969,0.2422,0.2734,-0.7969,0.3281,-0.2734,-0.7969,0.3281,0.2031,-0.7422,0.3906,-0.2031,-0.7422,0.3906,0.1562,-0.6484,0.4375,-0.1562,-0.6484,0.4375,0.3516,-0.6172,0.5156,-0.3516,-0.6172,0.5156,0.3516,-0.7188,0.4531,-0.3516,-0.7188,0.4531,0.3516,-0.7812,0.3594,-0.3516,-0.7812,0.3594,0.4375,-0.7656,0.3281,-0.4375,-0.7656,0.3281,0.5000,-0.6875,0.3906,-0.5000,-0.6875,0.3906,0.5469,-0.5781,0.4375,-0.5469,-0.5781,0.4375,0.6250,-0.5625,0.2422,-0.6250,-0.5625,0.2422,0.5625,-0.6719,0.2422,-0.5625,-0.6719,0.2422,0.4688,-0.7578,0.2422,-0.4688,-0.7578,0.2422,0.4766,-0.7734,0.2422,-0.4766,-0.7734,0.2422,0.4453,-0.7812,0.3359,-0.4453,-0.7812,0.3359,0.3516,-0.8047,0.3750,-0.3516,-0.8047,0.3750,0.2656,-0.8203,0.3359,-0.2656,-0.8203,0.3359,0.2266,-0.8203,0.2422,-0.2266,-0.8203,0.2422,0.2656,-0.8203,0.1562,-0.2656,-0.8203,0.1562,0.3516,-0.8281,0.2422,-0.3516,-0.8281,0.2422,0.3516,-0.8047,0.1172,-0.3516,-0.8047,0.1172,0.4453,-0.7812,0.1562,-0.4453,-0.7812,0.1562,0.0000,-0.7422,0.4297,0.0000,-0.8203,0.3516,0.0000,-0.7344,-0.6797,0.0000,-0.7812,-0.3203,0.0000,-0.7969,-0.1875,0.0000,-0.7188,-0.7734,0.0000,-0.6016,0.4062,0.0000,-0.5703,0.5703,0.0000,0.5469,0.8984,0.0000,0.8516,0.5625,0.0000,0.8281,0.0703,0.0000,0.3516,-0.3828,0.2031,-0.5625,-0.1875,-0.2031,-0.5625,-0.1875,0.3125,-0.5703,-0.4375,-0.3125,-0.5703,-0.4375,0.3516,-0.5703,-0.6953,-0.3516,-0.5703,-0.6953,0.3672,-0.5312,-0.8906,-0.3672,-0.5312,-0.8906,0.3281,-0.5234,-0.9453,-0.3281,-0.5234,-0.9453,0.1797,-0.5547,-0.9688,-0.1797,-0.5547,-0.9688,0.0000,-0.5781,-0.9844,0.4375,-0.5312,-0.1406,-0.4375,-0.5312,-0.1406,0.6328,-0.5391,-0.0391,-0.6328,-0.5391,-0.0391,0.8281,-0.4453,0.1484,-0.8281,-0.4453,0.1484,0.8594,-0.5938,0.4297,-0.8594,-0.5938,0.4297,0.7109,-0.6250,0.4844,-0.7109,-0.6250,0.4844,0.4922,-0.6875,0.6016,-0.4922,-0.6875,0.6016,0.3203,-0.7344,0.7578,-0.3203,-0.7344,0.7578,0.1562,-0.7578,0.7188,-0.1562,-0.7578,0.7188,0.0625,-0.7500,0.4922,-0.0625,-0.7500,0.4922,0.1641,-0.7734,0.4141,-0.1641,-0.7734,0.4141,0.1250,-0.7656,0.3047,-0.1250,-0.7656,0.3047,0.2031,-0.7422,0.0938,-0.2031,-0.7422,0.0938,0.3750,-0.7031,0.0156,-0.3750,-0.7031,0.0156,0.4922,-0.6719,0.0625,-0.4922,-0.6719,0.0625,0.6250,-0.6484,0.1875,-0.6250,-0.6484,0.1875,0.6406,-0.6484,0.2969,-0.6406,-0.6484,0.2969,0.6016,-0.6641,0.3750,-0.6016,-0.6641,0.3750,0.4297,-0.7188,0.4375,-0.4297,-0.7188,0.4375,0.2500,-0.7578,0.4688,-0.2500,-0.7578,0.4688,0.0000,-0.7344,-0.7656,0.1094,-0.7344,-0.7188,-0.1094,-0.7344,-0.7188,0.1172,-0.7109,-0.8359,-0.1172,-0.7109,-0.8359,0.0625,-0.6953,-0.8828,-0.0625,-0.6953,-0.8828,0.0000,-0.6875,-0.8906,0.0000,-0.7500,-0.1953,0.0000,-0.7422,-0.1406,0.1016,-0.7422,-0.1484,-0.1016,-0.7422,-0.1484,0.1250,-0.7500,-0.2266,-0.1250,-0.7500,-0.2266,0.0859,-0.7422,-0.2891,-0.0859,-0.7422,-0.2891,0.3984,-0.6719,-0.0469,-0.3984,-0.6719,-0.0469,0.6172,-0.6250,0.0547,-0.6172,-0.6250,0.0547,0.7266,-0.6016,0.2031,-0.7266,-0.6016,0.2031,0.7422,-0.6562,0.3750,-0.7422,-0.6562,0.3750,0.6875,-0.7266,0.4141,-0.6875,-0.7266,0.4141,0.4375,-0.7969,0.5469,-0.4375,-0.7969,0.5469,0.3125,-0.8359,0.6406,-0.3125,-0.8359,0.6406,0.2031,-0.8516,0.6172,-0.2031,-0.8516,0.6172,0.1016,-0.8438,0.4297,-0.1016,-0.8438,0.4297,0.1250,-0.8125,-0.1016,-0.1250,-0.8125,-0.1016,0.2109,-0.7109,-0.4453,-0.2109,-0.7109,-0.4453,0.2500,-0.6875,-0.7031,-0.2500,-0.6875,-0.7031,0.2656,-0.6641,-0.8203,-0.2656,-0.6641,-0.8203,0.2344,-0.6328,-0.9141,-0.2344,-0.6328,-0.9141,0.1641,-0.6328,-0.9297,-0.1641,-0.6328,-0.9297,0.0000,-0.6406,-0.9453,0.0000,-0.7266,0.0469,0.0000,-0.7656,0.2109,0.3281,-0.7422,0.4766,-0.3281,-0.7422,0.4766,0.1641,-0.7500,0.1406,-0.1641,-0.7500,0.1406,0.1328,-0.7578,0.2109,-0.1328,-0.7578,0.2109,0.1172,-0.7344,-0.6875,-0.1172,-0.7344,-0.6875,0.0781,-0.7500,-0.4453,-0.0781,-0.7500,-0.4453,0.0000,-0.7500,-0.4453,0.0000,-0.7422,-0.3281,0.0938,-0.7812,-0.2734,-0.0938,-0.7812,-0.2734,0.1328,-0.7969,-0.2266,-0.1328,-0.7969,-0.2266,0.1094,-0.7812,-0.1328,-0.1094,-0.7812,-0.1328,0.0391,-0.7812,-0.1250,-0.0391,-0.7812,-0.1250,0.0000,-0.8281,-0.2031,0.0469,-0.8125,-0.1484,-0.0469,-0.8125,-0.1484,0.0938,-0.8125,-0.1562,-0.0938,-0.8125,-0.1562,0.1094,-0.8281,-0.2266,-0.1094,-0.8281,-0.2266,0.0781,-0.8047,-0.2500,-0.0781,-0.8047,-0.2500,0.0000,-0.8047,-0.2891,0.2578,-0.5547,-0.3125,-0.2578,-0.5547,-0.3125,0.1641,-0.7109,-0.2422,-0.1641,-0.7109,-0.2422,0.1797,-0.7109,-0.3125,-0.1797,-0.7109,-0.3125,0.2344,-0.5547,-0.2500,-0.2344,-0.5547,-0.2500,0.0000,-0.6875,-0.8750,0.0469,-0.6875,-0.8672,-0.0469,-0.6875,-0.8672,0.0938,-0.7109,-0.8203,-0.0938,-0.7109,-0.8203,0.0938,-0.7266,-0.7422,-0.0938,-0.7266,-0.7422,0.0000,-0.6562,-0.7812,0.0938,-0.6641,-0.7500,-0.0938,-0.6641,-0.7500,0.0938,-0.6406,-0.8125,-0.0938,-0.6406,-0.8125,0.0469,-0.6328,-0.8516,-0.0469,-0.6328,-0.8516,0.0000,-0.6328,-0.8594,0.1719,-0.7812,0.2188,-0.1719,-0.7812,0.2188,0.1875,-0.7734,0.1562,-0.1875,-0.7734,0.1562,0.3359,-0.7578,0.4297,-0.3359,-0.7578,0.4297,0.2734,-0.7734,0.4219,-0.2734,-0.7734,0.4219,0.4219,-0.7734,0.3984,-0.4219,-0.7734,0.3984,0.5625,-0.6953,0.3516,-0.5625,-0.6953,0.3516,0.5859,-0.6875,0.2891,-0.5859,-0.6875,0.2891,0.5781,-0.6797,0.1953,-0.5781,-0.6797,0.1953,0.4766,-0.7188,0.1016,-0.4766,-0.7188,0.1016,0.3750,-0.7422,0.0625,-0.3750,-0.7422,0.0625,0.2266,-0.7812,0.1094,-0.2266,-0.7812,0.1094,0.1797,-0.7812,0.2969,-0.1797,-0.7812,0.2969,0.2109,-0.7812,0.3750,-0.2109,-0.7812,0.3750,0.2344,-0.7578,0.3594,-0.2344,-0.7578,0.3594,0.1953,-0.7578,0.2969,-0.1953,-0.7578,0.2969,0.2422,-0.7578,0.1250,-0.2422,-0.7578,0.1250,0.3750,-0.7266,0.0859,-0.3750,-0.7266,0.0859,0.4609,-0.7031,0.1172,-0.4609,-0.7031,0.1172,0.5469,-0.6719,0.2109,-0.5469,-0.6719,0.2109,0.5547,-0.6719,0.2812,-0.5547,-0.6719,0.2812,0.5312,-0.6797,0.3359,-0.5312,-0.6797,0.3359,0.4141,-0.7500,0.3906,-0.4141,-0.7500,0.3906,0.2812,-0.7656,0.3984,-0.2812,-0.7656,0.3984,0.3359,-0.7500,0.4062,-0.3359,-0.7500,0.4062,0.2031,-0.7500,0.1719,-0.2031,-0.7500,0.1719,0.1953,-0.7500,0.2266,-0.1953,-0.7500,0.2266,0.1094,-0.6094,0.4609,-0.1094,-0.6094,0.4609,0.1953,-0.6172,0.6641,-0.1953,-0.6172,0.6641,0.3359,-0.5938,0.6875,-0.3359,-0.5938,0.6875,0.4844,-0.5547,0.5547,-0.4844,-0.5547,0.5547,0.6797,-0.4922,0.4531,-0.6797,-0.4922,0.4531,0.7969,-0.4609,0.4062,-0.7969,-0.4609,0.4062,0.7734,-0.3750,0.1641,-0.7734,-0.3750,0.1641,0.6016,-0.4141,0.0000,-0.6016,-0.4141,0.0000,0.4375,-0.4688,-0.0938,-0.4375,-0.4688,-0.0938,0.0000,-0.2891,0.8984,0.0000,0.0781,0.9844,0.0000,0.6719,-0.1953,0.0000,-0.1875,-0.4609,0.0000,-0.4609,-0.9766,0.0000,-0.3438,-0.8047,0.0000,-0.3203,-0.5703,0.0000,-0.2812,-0.4844,0.8516,-0.0547,0.2344,-0.8516,-0.0547,0.2344,0.8594,0.0469,0.3203,-0.8594,0.0469,0.3203,0.7734,0.4375,0.2656,-0.7734,0.4375,0.2656,0.4609,0.7031,0.4375,-0.4609,0.7031,0.4375,0.7344,-0.0703,-0.0469,-0.7344,-0.0703,-0.0469,0.5938,0.1641,-0.1250,-0.5938,0.1641,-0.1250,0.6406,0.4297,-0.0078,-0.6406,0.4297,-0.0078,0.3359,0.6641,0.0547,-0.3359,0.6641,0.0547,0.2344,-0.4062,-0.3516,-0.2344,-0.4062,-0.3516,0.1797,-0.2578,-0.4141,-0.1797,-0.2578,-0.4141,0.2891,-0.3828,-0.7109,-0.2891,-0.3828,-0.7109,0.2500,-0.3906,-0.5000,-0.2500,-0.3906,-0.5000,0.3281,-0.3984,-0.9141,-0.3281,-0.3984,-0.9141,0.1406,-0.3672,-0.7578,-0.1406,-0.3672,-0.7578,0.1250,-0.3594,-0.5391,-0.1250,-0.3594,-0.5391,0.1641,-0.4375,-0.9453,-0.1641,-0.4375,-0.9453,0.2188,-0.4297,-0.2812,-0.2188,-0.4297,-0.2812,0.2109,-0.4688,-0.2266,-0.2109,-0.4688,-0.2266,0.2031,-0.5000,-0.1719,-0.2031,-0.5000,-0.1719,0.2109,-0.1641,-0.3906,-0.2109,-0.1641,-0.3906,0.2969,0.2656,-0.3125,-0.2969,0.2656,-0.3125,0.3438,0.5391,-0.1484,-0.3438,0.5391,-0.1484,0.4531,0.3828,0.8672,-0.4531,0.3828,0.8672,0.4531,0.0703,0.9297,-0.4531,0.0703,0.9297,0.4531,-0.2344,0.8516,-0.4531,-0.2344,0.8516,0.4609,-0.4297,0.5234,-0.4609,-0.4297,0.5234,0.7266,-0.3359,0.4062,-0.7266,-0.3359,0.4062,0.6328,-0.2812,0.4531,-0.6328,-0.2812,0.4531,0.6406,-0.0547,0.7031,-0.6406,-0.0547,0.7031,0.7969,-0.1250,0.5625,-0.7969,-0.1250,0.5625,0.7969,0.1172,0.6172,-0.7969,0.1172,0.6172,0.6406,0.1953,0.7500,-0.6406,0.1953,0.7500,0.6406,0.4453,0.6797,-0.6406,0.4453,0.6797,0.7969,0.3594,0.5391,-0.7969,0.3594,0.5391,0.6172,0.5859,0.3281,-0.6172,0.5859,0.3281,0.4844,0.5469,0.0234,-0.4844,0.5469,0.0234,0.8203,0.2031,0.3281,-0.8203,0.2031,0.3281,0.4062,-0.1484,-0.1719,-0.4062,-0.1484,-0.1719,0.4297,0.2109,-0.1953,-0.4297,0.2109,-0.1953,0.8906,0.2344,0.4062,-0.8906,0.2344,0.4062,0.7734,0.1250,-0.1406,-0.7734,0.1250,-0.1406,1.0391,0.3281,-0.1016,-1.0391,0.3281,-0.1016,1.2812,0.4297,0.0547,-1.2812,0.4297,0.0547,1.3516,0.4219,0.3203,-1.3516,0.4219,0.3203,1.2344,0.4219,0.5078,-1.2344,0.4219,0.5078,1.0234,0.3125,0.4766,-1.0234,0.3125,0.4766,1.0156,0.2891,0.4141,-1.0156,0.2891,0.4141,1.1875,0.3906,0.4375,-1.1875,0.3906,0.4375,1.2656,0.4062,0.2891,-1.2656,0.4062,0.2891,1.2109,0.4062,0.0781,-1.2109,0.4062,0.0781,1.0312,0.3047,-0.0391,-1.0312,0.3047,-0.0391,0.8281,0.1328,-0.0703,-0.8281,0.1328,-0.0703,0.9219,0.2188,0.3594,-0.9219,0.2188,0.3594,0.9453,0.2891,0.3047,-0.9453,0.2891,0.3047,0.8828,0.2109,-0.0234,-0.8828,0.2109,-0.0234,1.0391,0.3672,0.0000,-1.0391,0.3672,0.0000,1.1875,0.4453,0.0938,-1.1875,0.4453,0.0938,1.2344,0.4453,0.2500,-1.2344,0.4453,0.2500,1.1719,0.4375,0.3594,-1.1719,0.4375,0.3594,1.0234,0.3594,0.3438,-1.0234,0.3594,0.3438,0.8438,0.2109,0.2891,-0.8438,0.2109,0.2891,0.8359,0.2734,0.1719,-0.8359,0.2734,0.1719,0.7578,0.2734,0.0938,-0.7578,0.2734,0.0938,0.8203,0.2734,0.0859,-0.8203,0.2734,0.0859,0.8438,0.2734,0.0156,-0.8438,0.2734,0.0156,0.8125,0.2734,-0.0156,-0.8125,0.2734,-0.0156,0.7266,0.0703,0.0000,-0.7266,0.0703,0.0000,0.7188,0.1719,-0.0234,-0.7188,0.1719,-0.0234,0.7188,0.1875,0.0391,-0.7188,0.1875,0.0391,0.7969,0.2109,0.2031,-0.7969,0.2109,0.2031,0.8906,0.2656,0.2422,-0.8906,0.2656,0.2422,0.8906,0.3203,0.2344,-0.8906,0.3203,0.2344,0.8125,0.3203,-0.0156,-0.8125,0.3203,-0.0156,0.8516,0.3203,0.0156,-0.8516,0.3203,0.0156,0.8281,0.3203,0.0781,-0.8281,0.3203,0.0781,0.7656,0.3203,0.0938,-0.7656,0.3203,0.0938,0.8438,0.3203,0.1719,-0.8438,0.3203,0.1719,1.0391,0.4141,0.3281,-1.0391,0.4141,0.3281,1.1875,0.4844,0.3438,-1.1875,0.4844,0.3438,1.2578,0.4922,0.2422,-1.2578,0.4922,0.2422,1.2109,0.4844,0.0859,-1.2109,0.4844,0.0859,1.0469,0.4219,0.0000,-1.0469,0.4219,0.0000,0.8828,0.2656,-0.0156,-0.8828,0.2656,-0.0156,0.9531,0.3438,0.2891,-0.9531,0.3438,0.2891,0.8906,0.3281,0.1094,-0.8906,0.3281,0.1094,0.9375,0.3359,0.0625,-0.9375,0.3359,0.0625,1.0000,0.3672,0.1250,-1.0000,0.3672,0.1250,0.9609,0.3516,0.1719,-0.9609,0.3516,0.1719,1.0156,0.3750,0.2344,-1.0156,0.3750,0.2344,1.0547,0.3828,0.1875,-1.0547,0.3828,0.1875,1.1094,0.3906,0.2109,-1.1094,0.3906,0.2109,1.0859,0.3906,0.2734,-1.0859,0.3906,0.2734,1.0234,0.4844,0.4375,-1.0234,0.4844,0.4375,1.2500,0.5469,0.4688,-1.2500,0.5469,0.4688,1.3672,0.5000,0.2969,-1.3672,0.5000,0.2969,1.3125,0.5312,0.0547,-1.3125,0.5312,0.0547,1.0391,0.4922,-0.0859,-1.0391,0.4922,-0.0859,0.7891,0.3281,-0.1250,-0.7891,0.3281,-0.1250,0.8594,0.3828,0.3828,-0.8594,0.3828,0.3828 ];
var Monkey_normals = [ 0.7277,-0.2051,-0.6545,-0.7277,-0.2051,-0.6545,0.6040,-0.6122,-0.5102,-0.6040,-0.6122,-0.5102,0.6829,-0.4835,-0.5475,-0.6829,-0.4835,-0.5475,0.1159,-0.4847,-0.8670,-0.1159,-0.4847,-0.8670,0.0982,-0.6530,-0.7510,-0.0982,-0.6530,-0.7510,0.0375,-0.2592,-0.9651,-0.0375,-0.2592,-0.9651,-0.6554,-0.3008,-0.6928,0.6554,-0.3008,-0.6928,-0.4514,-0.7109,-0.5393,0.4514,-0.7109,-0.5393,-0.5512,-0.5402,-0.6358,0.5512,-0.5402,-0.6358,-0.8148,-0.5797,-0.0038,0.8148,-0.5797,-0.0038,-0.6940,-0.7199,-0.0035,0.6940,-0.7199,-0.0035,-0.9460,-0.3237,-0.0128,0.9460,-0.3237,-0.0128,-0.6622,-0.2889,0.6914,0.6622,-0.2889,0.6914,-0.4551,-0.7191,0.5251,0.4551,-0.7191,0.5251,-0.5298,-0.5716,0.6266,0.5298,-0.5716,0.6266,0.1224,-0.5328,0.8373,-0.1224,-0.5328,0.8373,0.1019,-0.6647,0.7401,-0.1019,-0.6647,0.7401,0.0321,-0.2369,0.9710,-0.0321,-0.2369,0.9710,0.7320,-0.1949,0.6527,-0.7320,-0.1949,0.6527,0.6084,-0.6203,0.4949,-0.6084,-0.6203,0.4949,0.6722,-0.5084,0.5381,-0.6722,-0.5084,0.5381,0.8684,-0.4958,-0.0033,-0.8684,-0.4958,-0.0033,0.8021,-0.5972,-0.0034,-0.8021,-0.5972,-0.0034,0.9777,-0.2097,-0.0110,-0.9777,-0.2097,-0.0110,0.9737,-0.2273,-0.0122,-0.9737,-0.2273,-0.0122,0.7220,-0.2374,0.6499,-0.7220,-0.2374,0.6499,0.0374,-0.3564,0.9336,-0.0374,-0.3564,0.9336,-0.6263,-0.4348,0.6470,0.6263,-0.4348,0.6470,-0.9113,-0.4116,-0.0123,0.9113,-0.4116,-0.0123,-0.6181,-0.4364,-0.6538,0.6181,-0.4364,-0.6538,0.1836,-0.9830,-0.0053,-0.1836,-0.9830,-0.0053,0.0369,-0.3524,-0.9351,-0.0369,-0.3524,-0.9351,0.7150,-0.2391,-0.6569,-0.7150,-0.2391,-0.6569,0.0000,-0.2816,0.9595,0.0000,-0.9997,-0.0241,0.0000,-0.9994,-0.0342,0.0000,-0.5146,-0.8574,0.0000,-0.6193,0.7851,0.0000,-0.4294,-0.9031,0.0000,-0.4760,0.8794,0.0000,-0.7843,0.6204,0.0000,0.5539,0.8325,0.0000,0.9494,0.3141,0.0000,0.9538,-0.3004,0.0000,0.3385,-0.9410,0.9053,-0.1703,-0.3891,-0.9053,-0.1703,-0.3891,0.9651,-0.1435,0.2189,-0.9651,-0.1435,0.2189,0.9758,-0.1970,0.0949,-0.9758,-0.1970,0.0949,0.9696,-0.1954,-0.1473,-0.9696,-0.1954,-0.1473,0.6541,-0.1480,-0.7418,-0.6541,-0.1480,-0.7418,0.1576,-0.1596,-0.9745,-0.1576,-0.1596,-0.9745,0.0000,-0.2098,-0.9777,0.3605,-0.0454,-0.9316,-0.3605,-0.0454,-0.9316,0.5889,-0.1668,-0.7908,-0.5889,-0.1668,-0.7908,0.9126,0.0698,-0.4027,-0.9126,0.0698,-0.4027,0.8801,-0.2138,0.4238,-0.8801,-0.2138,0.4238,0.5100,-0.2144,0.8330,-0.5100,-0.2144,0.8330,0.5978,-0.1683,0.7838,-0.5978,-0.1683,0.7838,0.2283,-0.1689,0.9588,-0.2283,-0.1689,0.9588,-0.5987,-0.1930,0.7773,0.5987,-0.1930,0.7773,-0.7917,-0.1826,0.5829,0.7917,-0.1826,0.5829,0.2654,-0.9423,-0.2040,-0.2654,-0.9423,-0.2040,0.0284,-0.9796,-0.1986,-0.0284,-0.9796,-0.1986,-0.1349,-0.9673,-0.2146,0.1349,-0.9673,-0.2146,0.3106,-0.8875,-0.3403,-0.3106,-0.8875,-0.3403,0.4194,-0.8245,-0.3797,-0.4194,-0.8245,-0.3797,0.4415,-0.8733,-0.2058,-0.4415,-0.8733,-0.2058,0.3630,-0.9073,-0.2123,-0.3630,-0.9073,-0.2123,0.2413,-0.9207,-0.3067,-0.2413,-0.9207,-0.3067,0.1978,-0.9802,-0.0104,-0.1978,-0.9802,-0.0104,0.2660,-0.9557,-0.1257,-0.2660,-0.9557,-0.1257,0.0000,-0.9048,-0.4257,0.1559,-0.9729,-0.1706,-0.1559,-0.9729,-0.1706,0.0891,-0.9422,-0.3229,-0.0891,-0.9422,-0.3229,-0.0252,-0.9109,-0.4118,0.0252,-0.9109,-0.4118,0.0000,-0.9435,-0.3312,0.0000,-0.6508,0.7592,0.0000,-0.8221,0.5692,0.2528,-0.9028,0.3479,-0.2528,-0.9028,0.3479,0.7215,-0.5885,-0.3646,-0.7215,-0.5885,-0.3646,0.4969,-0.7505,-0.4356,-0.4969,-0.7505,-0.4356,0.3809,-0.7662,-0.5176,-0.3809,-0.7662,-0.5176,0.4987,-0.7683,-0.4011,-0.4987,-0.7683,-0.4011,0.5489,-0.7694,-0.3266,-0.5489,-0.7694,-0.3266,0.4875,-0.8606,-0.1470,-0.4875,-0.8606,-0.1470,0.3417,-0.9392,-0.0325,-0.3417,-0.9392,-0.0325,0.3141,-0.9489,-0.0304,-0.3141,-0.9489,-0.0304,0.2711,-0.9387,0.2130,-0.2711,-0.9387,0.2130,-0.1643,-0.9735,0.1590,0.1643,-0.9735,0.1590,-0.0729,-0.9969,-0.0287,0.0729,-0.9969,-0.0287,0.0663,-0.9789,-0.1929,-0.0663,-0.9789,-0.1929,0.5872,-0.8016,0.1119,-0.5872,-0.8016,0.1119,0.5678,-0.8224,-0.0330,-0.5678,-0.8224,-0.0330,0.5559,-0.8027,-0.2160,-0.5559,-0.8027,-0.2160,0.3630,-0.6970,-0.6184,-0.3630,-0.6970,-0.6184,0.1679,-0.6356,-0.7535,-0.1679,-0.6356,-0.7535,0.0000,-0.6102,-0.7922,0.0000,-0.9999,0.0135,0.0000,-0.9747,-0.2235,0.1334,-0.9862,-0.0975,-0.1334,-0.9862,-0.0975,-0.3104,-0.9353,-0.1697,0.3104,-0.9353,-0.1697,-0.1624,-0.9663,-0.1997,0.1624,-0.9663,-0.1997,0.1802,-0.9819,-0.0578,-0.1802,-0.9819,-0.0578,0.1386,-0.9903,0.0029,-0.1386,-0.9903,0.0029,0.0000,-1.0000,-0.0041,0.0000,-0.8892,-0.4576,0.5803,-0.3597,-0.7306,-0.5803,-0.3597,-0.7306,0.9246,-0.3159,-0.2129,-0.9246,-0.3159,-0.2129,0.6218,-0.1168,0.7744,-0.6218,-0.1168,0.7744,-0.3018,-0.1492,0.9416,0.3018,-0.1492,0.9416,0.0000,-0.9935,0.1136,-0.1992,-0.7734,0.6017,0.1992,-0.7734,0.6017,0.3664,-0.8000,0.4751,-0.3664,-0.8000,0.4751,0.4296,-0.8838,-0.1849,-0.4296,-0.8838,-0.1849,0.2206,-0.7958,-0.5640,-0.2206,-0.7958,-0.5640,0.0000,-0.8489,-0.5286,0.9385,-0.1160,0.3251,-0.9385,-0.1160,0.3251,0.7430,-0.6686,0.0295,-0.7430,-0.6686,0.0295,0.6464,-0.7496,0.1424,-0.6464,-0.7496,0.1424,0.9534,-0.1079,0.2816,-0.9534,-0.1079,0.2816,0.0000,-0.7627,0.6467,-0.3705,-0.7521,0.5450,0.3705,-0.7521,0.5450,-0.6503,-0.7572,0.0615,0.6503,-0.7572,0.0615,-0.1140,-0.7801,-0.6151,0.1140,-0.7801,-0.6151,0.0000,-0.7153,-0.6988,-0.5163,-0.4874,-0.7041,0.5163,-0.4874,-0.7041,-0.6748,-0.7290,0.1147,0.6748,-0.7290,0.1147,-0.3272,-0.8171,0.4745,0.3272,-0.8171,0.4745,0.0000,-0.8487,0.5289,0.1649,-0.9822,-0.0897,-0.1649,-0.9822,-0.0897,-0.0170,-0.9980,-0.0610,0.0170,-0.9980,-0.0610,0.1657,-0.9797,0.1129,-0.1657,-0.9797,0.1129,0.1828,-0.9825,0.0367,-0.1828,-0.9825,0.0367,0.1730,-0.9786,-0.1109,-0.1730,-0.9786,-0.1109,0.3063,-0.9513,0.0342,-0.3063,-0.9513,0.0342,0.1870,-0.9802,-0.0655,-0.1870,-0.9802,-0.0655,0.2990,-0.9497,-0.0934,-0.2990,-0.9497,-0.0934,0.2858,-0.9573,-0.0425,-0.2858,-0.9573,-0.0425,0.1998,-0.9577,-0.2072,-0.1998,-0.9577,-0.2072,0.0129,-0.9876,-0.1560,-0.0129,-0.9876,-0.1560,0.2358,-0.9656,-0.1089,-0.2358,-0.9656,-0.1089,0.1633,-0.9830,-0.0836,-0.1633,-0.9830,-0.0836,0.5010,-0.7756,-0.3839,-0.5010,-0.7756,-0.3839,0.7464,-0.6303,-0.2134,-0.7464,-0.6303,-0.2134,0.4245,-0.7108,0.5609,-0.4245,-0.7108,0.5609,0.1489,-0.7755,0.6135,-0.1489,-0.7755,0.6135,-0.0831,-0.8365,0.5416,0.0831,-0.8365,0.5416,-0.2549,-0.9406,0.2241,0.2549,-0.9406,0.2241,-0.3549,-0.9260,-0.1286,0.3549,-0.9260,-0.1286,-0.1943,-0.7633,-0.6160,0.1943,-0.7633,-0.6160,-0.1401,-0.6322,-0.7620,0.1401,-0.6322,-0.7620,0.3063,-0.8879,-0.3431,-0.3063,-0.8879,-0.3431,0.0021,-0.8687,-0.4953,-0.0021,-0.8687,-0.4953,0.6875,-0.6625,0.2974,-0.6875,-0.6625,0.2974,0.8052,-0.5928,0.0150,-0.8052,-0.5928,0.0150,-0.5046,-0.0448,0.8622,0.5046,-0.0448,0.8622,-0.4770,0.7158,0.5100,0.4770,0.7158,0.5100,0.1146,0.7464,0.6555,-0.1146,0.7464,0.6555,0.3084,0.2642,0.9138,-0.3084,0.2642,0.9138,0.3515,0.2249,0.9087,-0.3515,0.2249,0.9087,0.7392,0.3048,0.6005,-0.7392,0.3048,0.6005,0.9393,0.1533,-0.3068,-0.9393,0.1533,-0.3068,0.5768,0.0972,-0.8110,-0.5768,0.0972,-0.8110,0.4394,0.1016,-0.8925,-0.4394,0.1016,-0.8925,0.0000,-0.5627,0.8267,0.0000,-0.0232,0.9997,0.0000,0.7174,-0.6966,0.0000,0.1650,-0.9863,0.0000,0.5255,-0.8508,0.0000,0.9546,-0.2978,0.0000,0.9481,-0.3178,0.0000,0.5931,-0.8051,0.9762,-0.0787,-0.2019,-0.9762,-0.0787,-0.2019,0.9989,-0.0062,-0.0455,-0.9989,-0.0062,-0.0455,0.6260,0.7794,-0.0259,-0.6260,0.7794,-0.0259,0.4534,0.8693,0.1969,-0.4534,0.8693,0.1969,0.7152,-0.0736,-0.6950,-0.7152,-0.0736,-0.6950,0.2744,0.0552,-0.9600,-0.2744,0.0552,-0.9600,0.4020,0.6767,-0.6167,-0.4020,0.6767,-0.6167,0.4237,0.8459,-0.3240,-0.4237,0.8459,-0.3240,0.9601,0.2794,-0.0016,-0.9601,0.2794,-0.0016,0.7260,0.3591,-0.5865,-0.7260,0.3591,-0.5865,0.6058,0.7953,0.0208,-0.6058,0.7953,0.0208,0.7766,0.6299,-0.0093,-0.7766,0.6299,-0.0093,0.5586,0.6848,-0.4679,-0.5586,0.6848,-0.4679,0.1293,0.9753,-0.1789,-0.1293,0.9753,-0.1789,0.3375,0.9066,-0.2535,-0.3375,0.9066,-0.2535,0.0993,0.6327,-0.7679,-0.0993,0.6327,-0.7679,0.9731,-0.0002,-0.2302,-0.9731,-0.0002,-0.2302,0.9537,-0.2246,-0.1999,-0.9537,-0.2246,-0.1999,0.8140,-0.1732,-0.5544,-0.8140,-0.1732,-0.5544,0.5887,0.0185,-0.8081,-0.5887,0.0185,-0.8081,0.5213,0.2162,-0.8255,-0.5213,0.2162,-0.8255,0.5191,0.5483,-0.6556,-0.5191,0.5483,-0.6556,0.4258,0.4165,0.8032,-0.4258,0.4165,0.8032,0.4198,-0.0349,0.9069,-0.4198,-0.0349,0.9069,0.4610,-0.4989,0.7338,-0.4610,-0.4989,0.7338,0.3916,-0.4012,0.8280,-0.3916,-0.4012,0.8280,0.7652,-0.1565,0.6244,-0.7652,-0.1565,0.6244,0.4721,-0.4149,0.7778,-0.4721,-0.4149,0.7778,0.6514,-0.3335,0.6814,-0.6514,-0.3335,0.6814,0.7475,-0.3969,0.5326,-0.7475,-0.3969,0.5326,0.8548,0.0301,0.5181,-0.8548,0.0301,0.5181,0.6788,0.0612,0.7318,-0.6788,0.0612,0.7318,0.6440,0.5438,0.5379,-0.6440,0.5438,0.5379,0.8739,0.3769,0.3070,-0.8739,0.3769,0.3070,0.5860,0.8101,-0.0155,-0.5860,0.8101,-0.0155,0.5443,0.6766,-0.4959,-0.5443,0.6766,-0.4959,0.8965,-0.3220,0.3044,-0.8965,-0.3220,0.3044,0.5730,-0.1600,-0.8037,-0.5730,-0.1600,-0.8037,0.5809,0.1463,-0.8007,-0.5809,0.1463,-0.8007,-0.2878,-0.6094,0.7388,0.2878,-0.6094,0.7388,-0.0439,-0.7602,-0.6481,0.0439,-0.7602,-0.6481,0.4719,-0.4116,-0.7796,-0.4719,-0.4116,-0.7796,0.6731,-0.5450,-0.4998,-0.6731,-0.5450,-0.4998,0.7896,-0.5869,0.1790,-0.7896,-0.5869,0.1790,0.3604,-0.3600,0.8605,-0.3604,-0.3600,0.8605,0.0163,-0.4863,0.8736,-0.0163,-0.4863,0.8736,0.5420,-0.8376,-0.0674,-0.5420,-0.8376,-0.0674,0.3174,-0.9437,-0.0930,-0.3174,-0.9437,-0.0930,-0.1201,-0.9887,-0.0897,0.1201,-0.9887,-0.0897,-0.0240,-0.9614,0.2739,0.0240,-0.9614,0.2739,0.4922,-0.8263,0.2738,-0.4922,-0.8263,0.2738,0.3413,-0.8712,0.3527,-0.3413,-0.8712,0.3527,0.4590,-0.8862,-0.0631,-0.4590,-0.8862,-0.0631,0.6878,-0.4698,-0.5533,-0.6878,-0.4698,-0.5533,0.2330,-0.4164,0.8788,-0.2330,-0.4164,0.8788,-0.1665,-0.2497,0.9539,0.1665,-0.2497,0.9539,-0.7613,-0.0399,0.6471,0.7613,-0.0399,0.6471,-0.9810,-0.1698,-0.0934,0.9810,-0.1698,-0.0934,-0.1410,-0.6188,-0.7728,0.1410,-0.6188,-0.7728,0.5587,-0.5044,-0.6583,-0.5587,-0.5044,-0.6583,0.7427,-0.6166,-0.2611,-0.7427,-0.6166,-0.2611,0.7481,-0.3224,-0.5799,-0.7481,-0.3224,-0.5799,0.8589,-0.5108,0.0371,-0.8589,-0.5108,0.0371,0.5731,-0.3795,0.7262,-0.5731,-0.3795,0.7262,0.8837,-0.4639,-0.0624,-0.8837,-0.4639,-0.0624,0.5933,-0.5720,0.5663,-0.5933,-0.5720,0.5663,0.8615,0.1400,-0.4880,-0.8615,0.1400,-0.4880,0.7450,-0.6615,0.0855,-0.7450,-0.6615,0.0855,0.9210,-0.3480,-0.1749,-0.9210,-0.3480,-0.1749,0.8720,-0.2446,-0.4240,-0.8720,-0.2446,-0.4240,0.6963,-0.4714,-0.5412,-0.6963,-0.4714,-0.5412,0.6669,-0.6052,-0.4348,-0.6669,-0.6052,-0.4348,0.6600,-0.6650,0.3495,-0.6600,-0.6650,0.3495,0.3739,-0.8510,0.3687,-0.3739,-0.8510,0.3687,0.4447,-0.8138,0.3740,-0.4447,-0.8138,0.3740,0.7837,-0.5680,0.2514,-0.7837,-0.5680,0.2514,0.5714,-0.7015,-0.4259,-0.5714,-0.7015,-0.4259,0.4844,-0.8072,-0.3373,-0.4844,-0.8072,-0.3373,-0.2485,-0.7738,-0.5826,0.2485,-0.7738,-0.5826,-0.7433,-0.6618,-0.0973,0.7433,-0.6618,-0.0973,-0.5392,-0.7114,0.4506,0.5392,-0.7114,0.4506,0.0873,-0.6668,0.7400,-0.0873,-0.6668,0.7400,-0.0507,-0.3023,0.9518,0.0507,-0.3023,0.9518,0.6358,-0.6544,-0.4092,-0.6358,-0.6544,-0.4092,0.1983,-0.9801,0.0051,-0.1983,-0.9801,0.0051,0.3854,-0.9153,0.1162,-0.3854,-0.9153,0.1162,0.4315,-0.9015,-0.0331,-0.4315,-0.9015,-0.0331,0.3281,-0.9446,0.0002,-0.3281,-0.9446,0.0002,0.3178,-0.9435,0.0937,-0.3178,-0.9435,0.0937,0.3447,-0.9355,-0.0767,-0.3447,-0.9355,-0.0767,0.4365,-0.8996,-0.0136,-0.4365,-0.8996,-0.0136,0.3573,-0.8851,0.2980,-0.3573,-0.8851,0.2980,-0.4176,0.7166,0.5586,0.4176,0.7166,0.5586,0.3048,0.7213,0.6219,-0.3048,0.7213,0.6219,0.9234,0.3741,0.0856,-0.9234,0.3741,0.0856,0.6149,0.6174,-0.4906,-0.6149,0.6174,-0.4906,-0.0418,0.7140,-0.6989,0.0418,0.7140,-0.6989,-0.0797,0.5283,-0.8453,0.0797,0.5283,-0.8453,-0.6562,0.4927,0.5715,0.6562,0.4927,0.5715 ];
var Monkey_indices = [ 46,0,2,46,2,44,3,1,47,3,47,45,44,2,4,44,4,42,5,3,45,5,45,43,2,8,6,2,6,4,7,9,3,7,3,5,0,10,8,0,8,2,9,11,1,9,1,3,10,12,14,10,14,8,15,13,11,15,11,9,8,14,16,8,16,6,17,15,9,17,9,7,14,20,18,14,18,16,19,21,15,19,15,17,12,22,20,12,20,14,21,23,13,21,13,15,22,24,26,22,26,20,27,25,23,27,23,21,20,26,28,20,28,18,29,27,21,29,21,19,26,32,30,26,30,28,31,33,27,31,27,29,24,34,32,24,32,26,33,35,25,33,25,27,34,36,38,34,38,32,39,37,35,39,35,33,32,38,40,32,40,30,41,39,33,41,33,31,38,44,42,38,42,40,43,45,39,43,39,41,36,46,44,36,44,38,45,47,37,45,37,39,46,36,50,46,50,48,51,37,47,51,47,49,36,34,52,36,52,50,53,35,37,53,37,51,34,24,54,34,54,52,55,25,35,55,35,53,24,22,56,24,56,54,57,23,25,57,25,55,22,12,58,22,58,56,59,13,23,59,23,57,12,10,62,12,62,58,63,11,13,63,13,59,10,0,64,10,64,62,65,1,11,65,11,63,0,46,48,0,48,64,49,47,1,49,1,65,60,64,48,49,65,61,62,64,60,61,65,63,60,58,62,63,59,61,60,56,58,59,57,61,60,54,56,57,55,61,60,52,54,55,53,61,60,50,52,53,51,61,60,48,50,51,49,61,88,173,175,88,175,90,175,174,89,175,89,90,86,171,173,86,173,88,174,172,87,174,87,89,84,169,171,84,171,86,172,170,85,172,85,87,82,167,169,82,169,84,170,168,83,170,83,85,80,165,167,80,167,82,168,166,81,168,81,83,78,91,145,78,145,163,146,92,79,146,79,164,91,93,147,91,147,145,148,94,92,148,92,146,93,95,149,93,149,147,150,96,94,150,94,148,95,97,151,95,151,149,152,98,96,152,96,150,97,99,153,97,153,151,154,100,98,154,98,152,99,101,155,99,155,153,156,102,100,156,100,154,101,103,157,101,157,155,158,104,102,158,102,156,103,105,159,103,159,157,160,106,104,160,104,158,105,107,161,105,161,159,162,108,106,162,106,160,107,66,67,107,67,161,67,66,108,67,108,162,109,127,159,109,159,161,160,128,110,160,110,162,127,178,157,127,157,159,158,179,128,158,128,160,125,155,157,125,157,178,158,156,126,158,126,179,123,153,155,123,155,125,156,154,124,156,124,126,121,151,153,121,153,123,154,152,122,154,122,124,119,149,151,119,151,121,152,150,120,152,120,122,117,147,149,117,149,119,150,148,118,150,118,120,115,145,147,115,147,117,148,146,116,148,116,118,113,163,145,113,145,115,146,164,114,146,114,116,113,180,176,113,176,163,176,181,114,176,114,164,109,161,67,109,67,111,67,162,110,67,110,112,111,67,177,111,177,182,177,67,112,177,112,183,176,180,182,176,182,177,183,181,176,183,176,177,134,136,175,134,175,173,175,136,135,175,135,174,132,134,173,132,173,171,174,135,133,174,133,172,130,132,171,130,171,169,172,133,131,172,131,170,165,186,184,165,184,167,185,187,166,185,166,168,130,169,167,130,167,184,168,170,131,168,131,185,143,189,188,143,188,186,188,189,144,188,144,187,184,186,188,184,188,68,188,187,185,188,185,68,129,130,184,129,184,68,185,131,129,185,129,68,141,192,190,141,190,143,191,193,142,191,142,144,139,194,192,139,192,141,193,195,140,193,140,142,138,196,194,138,194,139,195,197,138,195,138,140,137,70,196,137,196,138,197,70,137,197,137,138,189,143,190,189,190,69,191,144,189,191,189,69,69,190,205,69,205,207,206,191,69,206,69,207,70,198,199,70,199,196,200,198,70,200,70,197,196,199,201,196,201,194,202,200,197,202,197,195,194,201,203,194,203,192,204,202,195,204,195,193,192,203,205,192,205,190,206,204,193,206,193,191,198,203,201,198,201,199,202,204,198,202,198,200,198,207,205,198,205,203,206,207,198,206,198,204,138,139,163,138,163,176,164,140,138,164,138,176,139,141,210,139,210,163,211,142,140,211,140,164,141,143,212,141,212,210,213,144,142,213,142,211,143,186,165,143,165,212,166,187,144,166,144,213,80,208,212,80,212,165,213,209,81,213,81,166,208,214,210,208,210,212,211,215,209,211,209,213,78,163,210,78,210,214,211,164,79,211,79,215,130,129,71,130,71,221,71,129,131,71,131,222,132,130,221,132,221,219,222,131,133,222,133,220,134,132,219,134,219,217,220,133,135,220,135,218,136,134,217,136,217,216,218,135,136,218,136,216,216,217,228,216,228,230,229,218,216,229,216,230,217,219,226,217,226,228,227,220,218,227,218,229,219,221,224,219,224,226,225,222,220,225,220,227,221,71,223,221,223,224,223,71,222,223,222,225,223,230,228,223,228,224,229,230,223,229,223,225,224,228,226,227,229,225,182,180,233,182,233,231,234,181,183,234,183,232,111,182,231,111,231,253,232,183,112,232,112,254,109,111,253,109,253,255,254,112,110,254,110,256,180,113,251,180,251,233,252,114,181,252,181,234,113,115,249,113,249,251,250,116,114,250,114,252,115,117,247,115,247,249,248,118,116,248,116,250,117,119,245,117,245,247,246,120,118,246,118,248,119,121,243,119,243,245,244,122,120,244,120,246,121,123,241,121,241,243,242,124,122,242,122,244,123,125,239,123,239,241,240,126,124,240,124,242,125,178,235,125,235,239,236,179,126,236,126,240,178,127,237,178,237,235,238,128,179,238,179,236,127,109,255,127,255,237,256,110,128,256,128,238,237,255,257,237,257,275,258,256,238,258,238,276,235,237,275,235,275,277,276,238,236,276,236,278,239,235,277,239,277,273,278,236,240,278,240,274,241,239,273,241,273,271,274,240,242,274,242,272,243,241,271,243,271,269,272,242,244,272,244,270,245,243,269,245,269,267,270,244,246,270,246,268,247,245,267,247,267,265,268,246,248,268,248,266,249,247,265,249,265,263,266,248,250,266,250,264,251,249,263,251,263,261,264,250,252,264,252,262,233,251,261,233,261,279,262,252,234,262,234,280,255,253,259,255,259,257,260,254,256,260,256,258,253,231,281,253,281,259,282,232,254,282,254,260,231,233,279,231,279,281,280,234,232,280,232,282,66,107,283,66,283,72,284,108,66,284,66,72,107,105,285,107,285,283,286,106,108,286,108,284,105,103,287,105,287,285,288,104,106,288,106,286,103,101,289,103,289,287,290,102,104,290,104,288,101,99,291,101,291,289,292,100,102,292,102,290,99,97,293,99,293,291,294,98,100,294,100,292,97,95,295,97,295,293,296,96,98,296,98,294,95,93,297,95,297,295,298,94,96,298,96,296,93,91,299,93,299,297,300,92,94,300,94,298,307,308,327,307,327,337,328,308,307,328,307,338,306,307,337,306,337,335,338,307,306,338,306,336,305,306,335,305,335,339,336,306,305,336,305,340,88,90,305,88,305,339,305,90,89,305,89,340,86,88,339,86,339,333,340,89,87,340,87,334,84,86,333,84,333,329,334,87,85,334,85,330,82,84,329,82,329,331,330,85,83,330,83,332,329,335,337,329,337,331,338,336,330,338,330,332,329,333,339,329,339,335,340,334,330,340,330,336,325,331,337,325,337,327,338,332,326,338,326,328,80,82,331,80,331,325,332,83,81,332,81,326,208,341,343,208,343,214,344,342,209,344,209,215,80,325,341,80,341,208,342,326,81,342,81,209,78,214,343,78,343,345,344,215,79,344,79,346,78,345,299,78,299,91,300,346,79,300,79,92,76,323,351,76,351,303,352,324,76,352,76,303,303,351,349,303,349,77,350,352,303,350,303,77,77,349,347,77,347,304,348,350,77,348,77,304,304,347,327,304,327,308,328,348,304,328,304,308,325,327,347,325,347,341,348,328,326,348,326,342,295,297,317,295,317,309,318,298,296,318,296,310,75,315,323,75,323,76,324,316,75,324,75,76,301,357,355,301,355,302,356,358,301,356,301,302,302,355,353,302,353,74,354,356,302,354,302,74,74,353,315,74,315,75,316,354,74,316,74,75,291,293,361,291,361,363,362,294,292,362,292,364,363,361,367,363,367,365,368,362,364,368,364,366,365,367,369,365,369,371,370,368,366,370,366,372,371,369,375,371,375,373,376,370,372,376,372,374,313,377,373,313,373,375,374,378,314,374,314,376,315,353,373,315,373,377,374,354,316,374,316,378,353,355,371,353,371,373,372,356,354,372,354,374,355,357,365,355,365,371,366,358,356,366,356,372,357,359,363,357,363,365,364,360,358,364,358,366,289,291,363,289,363,359,364,292,290,364,290,360,73,359,357,73,357,301,358,360,73,358,73,301,283,285,287,283,287,289,288,286,284,288,284,290,283,289,359,283,359,73,360,290,284,360,284,73,72,283,73,73,284,72,293,295,309,293,309,361,310,296,294,310,294,362,309,311,367,309,367,361,368,312,310,368,310,362,311,381,369,311,369,367,370,382,312,370,312,368,313,375,369,313,369,381,370,376,314,370,314,382,347,349,385,347,385,383,386,350,348,386,348,384,317,383,385,317,385,319,386,384,318,386,318,320,297,299,383,297,383,317,384,300,298,384,298,318,299,343,341,299,341,383,342,344,300,342,300,384,341,347,383,384,348,342,299,345,343,344,346,300,313,321,379,313,379,377,380,322,314,380,314,378,315,377,379,315,379,323,380,378,316,380,316,324,319,385,379,319,379,321,380,386,320,380,320,322,349,351,379,349,379,385,380,352,350,380,350,386,323,379,351,352,380,324,399,387,413,399,413,401,414,388,400,414,400,402,399,401,403,399,403,397,404,402,400,404,400,398,397,403,405,397,405,395,406,404,398,406,398,396,395,405,407,395,407,393,408,406,396,408,396,394,393,407,409,393,409,391,410,408,394,410,394,392,391,409,411,391,411,389,412,410,392,412,392,390,409,419,417,409,417,411,418,420,410,418,410,412,407,421,419,407,419,409,420,422,408,420,408,410,405,423,421,405,421,407,422,424,406,422,406,408,403,425,423,403,423,405,424,426,404,424,404,406,401,427,425,401,425,403,426,428,402,426,402,404,401,413,415,401,415,427,416,414,402,416,402,428,317,319,443,317,443,441,444,320,318,444,318,442,319,389,411,319,411,443,412,390,320,412,320,444,309,317,441,309,441,311,442,318,310,442,310,312,381,429,413,381,413,387,414,430,382,414,382,388,411,417,439,411,439,443,440,418,412,440,412,444,437,445,443,437,443,439,444,446,438,444,438,440,433,445,437,433,437,435,438,446,434,438,434,436,431,447,445,431,445,433,446,448,432,446,432,434,429,447,431,429,431,449,432,448,430,432,430,450,413,429,449,413,449,415,450,430,414,450,414,416,311,447,429,311,429,381,430,448,312,430,312,382,311,441,445,311,445,447,446,442,312,446,312,448,441,443,445,446,444,442,415,449,451,415,451,475,452,450,416,452,416,476,449,431,461,449,461,451,462,432,450,462,450,452,431,433,459,431,459,461,460,434,432,460,432,462,433,435,457,433,457,459,458,436,434,458,434,460,435,437,455,435,455,457,456,438,436,456,436,458,437,439,453,437,453,455,454,440,438,454,438,456,439,417,473,439,473,453,474,418,440,474,440,454,427,415,475,427,475,463,476,416,428,476,428,464,425,427,463,425,463,465,464,428,426,464,426,466,423,425,465,423,465,467,466,426,424,466,424,468,421,423,467,421,467,469,468,424,422,468,422,470,419,421,469,419,469,471,470,422,420,470,420,472,417,419,471,417,471,473,472,420,418,472,418,474,457,455,479,457,479,477,480,456,458,480,458,478,477,479,481,477,481,483,482,480,478,482,478,484,483,481,487,483,487,485,488,482,484,488,484,486,485,487,489,485,489,491,490,488,486,490,486,492,463,475,485,463,485,491,486,476,464,486,464,492,451,483,485,451,485,475,486,484,452,486,452,476,451,461,477,451,477,483,478,462,452,478,452,484,457,477,461,457,461,459,462,478,458,462,458,460,453,473,479,453,479,455,480,474,454,480,454,456,471,481,479,471,479,473,480,482,472,480,472,474,469,487,481,469,481,471,482,488,470,482,470,472,467,489,487,467,487,469,488,490,468,488,468,470,465,491,489,465,489,467,490,492,466,490,466,468,463,491,465,466,492,464,391,389,503,391,503,501,504,390,392,504,392,502,393,391,501,393,501,499,502,392,394,502,394,500,395,393,499,395,499,497,500,394,396,500,396,498,397,395,497,397,497,495,498,396,398,498,398,496,399,397,495,399,495,493,496,398,400,496,400,494,387,399,493,387,493,505,494,400,388,494,388,506,493,501,503,493,503,505,504,502,494,504,494,506,493,495,499,493,499,501,500,496,494,500,494,502,495,497,499,500,498,496,313,381,387,313,387,505,388,382,314,388,314,506,313,505,503,313,503,321,504,506,314,504,314,322,319,321,503,319,503,389,504,322,320,504,320,390 ];